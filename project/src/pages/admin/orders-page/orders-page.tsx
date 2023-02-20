import Pagination from '../../../components/common/pagination/pagination';
import OrdersList from '../../../components/page-components/orders-list/orders-list';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppRoute, DEFAULT_ACTIVE_PAGE, ITEMS_PER_PAGE, SortDirection, SortType } from '../../../constants';
import { makeFakeOrders } from '../../../utils/mocks';
import { IOrder } from '../../../types/order.interface';

function OrdersPage(): JSX.Element {
  const [selectedSort, setSelectedSort] = useState<string>(SortType.Date);
  const [sortDirection, setSortDirection] = useState<string>(SortDirection.toHigh);

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
            <div className="catalog-sort">
              <h2 className="catalog-sort__title">Сортировать:</h2>
              <div className="catalog-sort__type">
                <button
                  className={`catalog-sort__type-button ${selectedSort === SortType.Date ? 'catalog-sort__type-button--active' : ''}`}
                  aria-label="по дате"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSelectedSort(SortType.Date);
                  }}
                >
                  по дате
                </button>
                <button
                  className={`catalog-sort__type-button ${selectedSort === SortType.Price ? 'catalog-sort__type-button--active' : ''}`}
                  aria-label="по цене"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSelectedSort(SortType.Price);
                  }}
                >
                  по цене
                </button>
              </div>
              <div className="catalog-sort__order">
                <button
                  className={`catalog-sort__order-button catalog-sort__order-button--up ${sortDirection === SortDirection.toHigh ? 'catalog-sort__order-button--active' : ''}`}
                  aria-label="По возрастанию"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSortDirection(SortDirection.toHigh);
                  }}
                >
                </button>
                <button
                  className={`catalog-sort__order-button catalog-sort__order-button--down ${sortDirection === SortDirection.toLow ? 'catalog-sort__order-button--active' : ''}`}
                  aria-label="По убыванию"
                  onClick={() => {
                    setActivePage(DEFAULT_ACTIVE_PAGE);
                    setSortDirection(SortDirection.toLow);
                  }}
                >
                </button>
              </div>
            </div>
            <OrdersList
              orders={sortOrders(selectedSort + sortDirection, orders)
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
