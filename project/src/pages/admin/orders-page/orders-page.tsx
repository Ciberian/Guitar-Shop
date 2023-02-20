import Sort from '../../../components/common/sort/sort';
import Pagination from '../../../components/common/pagination/pagination';
import OrdersList from '../../../components/page-components/orders-list/orders-list';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IOrder } from '../../../types/order.interface';
import { makeFakeOrders } from '../../../utils/mocks';
import {
  AppRoute,
  SortType,
  SortDirection,
  ITEMS_PER_PAGE,
  DEFAULT_ACTIVE_PAGE,
} from '../../../constants';

function OrdersPage(): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>(SortType.Date);
  const [selectedOrder, setSelectedOrder] = useState<string>(SortDirection.toHigh);

  const changeSort = (sortType: string, flag?: 'order') => {
    setActivePage(DEFAULT_ACTIVE_PAGE);
    if (flag === 'order') {
      setSelectedOrder(sortType);
    } else {
      setSelectedSort(sortType);
    }
  };

  const sortOrders = (sortType: string, orders: IOrder[]) => {
    switch (sortType) {
      case SortType.Price + SortDirection.toHigh:
        return orders.slice().sort((order1, order2) => order1.totalPrice - order2.totalPrice);
      case SortType.Price + SortDirection.toLow:
        return orders.slice().sort((order1, order2) => order2.totalPrice - order1.totalPrice);
      case SortType.Date + SortDirection.toHigh:
        return orders.slice().sort((order1, order2) => order1.date.getDate() - order2.date.getDate());
      case SortType.Date + SortDirection.toLow:
        return orders.slice().sort((order1, order2) => order2.date.getDate() - order1.date.getDate());
      default:
        return orders;
    }
  };

  const orders = makeFakeOrders();
  const [activePage, setActivePage] = useState(DEFAULT_ACTIVE_PAGE);
  const paginationChangeHandler = (page: number) => {
    setActivePage(page);
  };

  return (
    <div className='wrapper'>
      <SiteHeader />
      <main className='page-content orders__main'>
        <section className="orders">
          <div className="container">
            <h1 className="title title--bigger orders__title">Список заказов</h1>
            <ul className="breadcrumbs orders__breadcrumps">
              <li className="breadcrumbs__item">
                <Link className="link" to={AppRoute.Catalog}>Каталог</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="link" to={'#'}> Заказы</Link>
              </li>
            </ul>
            <Sort
              selectedSort={selectedSort}
              selectedOrder={selectedOrder}
              isHidePopular
              sortHandler={changeSort}
            />
            <OrdersList
              orders={sortOrders(selectedSort + selectedOrder, orders)
                .slice((activePage - 1) * ITEMS_PER_PAGE, activePage * ITEMS_PER_PAGE)}
            />
            <Pagination
              activePage={activePage}
              itemsCount={orders.length}
              extraClass={'orders__pagination'}
              paginationChangeHandler={paginationChangeHandler}
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default OrdersPage;
