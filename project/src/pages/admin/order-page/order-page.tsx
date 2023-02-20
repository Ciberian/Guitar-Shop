import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import LoadingScreen from '../../../components/system-components/loading-screen/loading-screen';
// import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks';
// import { getOrderAction } from '../../../store/api-actions';
// import { getOrder } from '../../../store/items-data/selectors';
import { getLoadedOrderStatus } from '../../../store/items-data/selectors';
import { makeFakeOrder } from '../../../utils/mocks';
import { AppRoute } from '../../../constants';
import OrderList from '../../../components/page-components/order-list/order-list';

function OrderPage(): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getOrderAction(Number(id)));
  // }, [id, dispatch]);

  const isOrderLoaded = useAppSelector(getLoadedOrderStatus);
  // const order = useAppSelector(getOrder);  - раcкомментировать если появится API
  const order = makeFakeOrder(Number(id)); // - удалить если появится API
  const formattedDate = order?.date.toLocaleString('ru', { year: 'numeric', month: 'numeric', day: 'numeric'});


  if (isOrderLoaded) { // - если будет API, то поменять на обратное значение - !isItemLoaded
    return <LoadingScreen />;
  }

  if (!order) {
    navigate(AppRoute.NotFoundPage);
  }

  // eslint-disable-next-line no-console
  console.log(order);

  return (
    <div className='wrapper'>
      <SiteHeader />
      <main className="page-content">
        <section className="order">
          <div className="container">
            <h1 className="order__title">Заказ № {order?.id}</h1>
            <ul className="breadcrumbs">
              <li className="breadcrumbs__item">
                <Link className="link" to={AppRoute.Catalog}>Каталог</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="link" to={AppRoute.Orders}>Заказы</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link className="link" to={'#'}>Заказ № {order?.id}</Link>
              </li>
            </ul>
            <table className="order-table">
              <tbody>
                <tr>
                  <td>Общее количество товаров</td>
                  <td>{order?.totalItems}</td>
                </tr>
                <tr>
                  <td>Дата заказа</td>
                  <td>{formattedDate}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>К оплате</td>
                  <td>{order?.totalPrice} <span>₽</span></td>
                </tr>
              </tfoot>
            </table>
            <OrderList order={order} />
            <button className="button order__button button--small button--black-border">Вернуться к списку заказов</button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default OrderPage;
