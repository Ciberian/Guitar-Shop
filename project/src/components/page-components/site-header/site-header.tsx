import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks';
import { getUserInfo } from '../../../store/user-process/selectors';
import { getCartItems } from '../../../store/items-data/selectors';
import { AppRoute } from '../../../constants';
import Logo from '../../common/logo/logo';

function SiteHeader(): JSX.Element {
  const userInfo = useAppSelector(getUserInfo);
  const cartItems = useAppSelector(getCartItems);

  let headerClass = '';
  if (userInfo?.isAdmin) {
    headerClass = 'header--admin';
  } else {
    if (userInfo && cartItems.length !== 0) {
      headerClass = 'header--logged';
    }

    if (userInfo && cartItems.length === 0) {
      headerClass = 'header--logged-empty';
    }
  }

  return (
    <header className={`header ${headerClass}`} id="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo extraСlass='header__logo' />
          <nav className="main-nav">
            <ul className="main-nav__list">
              <li className="main-nav__item">
                <Link className="link main-nav__link" to={AppRoute.Catalog}>
                  Каталог
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link main-nav__link" to={AppRoute.NotFoundPage}>
                  Где купить?
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="link main-nav__link" to={AppRoute.NotFoundPage}>
                  О компании
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__container">
            <span className="header__user-name">{userInfo?.name}</span>
            <Link
              className="header__link"
              to={userInfo ? AppRoute.MyAccount : AppRoute.Login}
              aria-label="Перейти в личный кабинет"
            >
              <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                <use xlinkHref="#icon-account"></use>
              </svg>
              <span className="header__link-text">Вход</span>
            </Link>
            <Link className="header__cart-link" to={AppRoute.Cart} aria-label="Перейти в корзину">
              <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-basket"></use>
              </svg>
              <span className="header__cart-count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
