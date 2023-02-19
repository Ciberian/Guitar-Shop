import CartItemsList from '../../../components/page-components/cart-items-list/cart-items-list';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import { Link } from 'react-router-dom';
import { makeFakeItems } from '../../../utils/mocks';
import { AppRoute } from '../../../constants';

function CartPage(): JSX.Element {
  const items = makeFakeItems(55, 130).slice(0, 3);

  return (
    <div className="wrapper">
      <SiteHeader />

      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <ul className="breadcrumbs page-content__breadcrumbs page-content__breadcrumbs--on-cart-page">
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Root}>Главная</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={AppRoute.Catalog}>Каталог</Link>
            </li>
            <li className="breadcrumbs__item">
              <Link className="link" to={'#'}>Корзина</Link>
            </li>
          </ul>
          <CartItemsList items={items}/>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

export default CartPage;
