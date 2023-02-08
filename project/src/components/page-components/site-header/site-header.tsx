import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { getUserInfo } from '../../../store/user-process/selectors';
import { logoutAction } from '../../../store/api-actions';
import { AppRoute } from '../../../constants';

function SiteHeader() {
  const userInfo = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const handleSignOut = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {userInfo ? (
                <>
                  <li className="header__nav-item user">
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" onClick={handleSignOut} href="\#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
