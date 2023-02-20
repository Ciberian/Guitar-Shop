import { useNavigate } from 'react-router-dom';
import SiteFooter from '../../components/page-components/site-footer/site-footer';
import SiteHeader from '../../components/page-components/site-header/site-header';
import { AppRoute } from '../../constants';

function NotFoundPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className='wrapper'>
      <SiteHeader />
      <main className="page-content">
        <div className="container">
          <section className="error">
            <h1 className="error__title">404</h1>
            <span className="error__subtitle">Страница не найдена.</span>
            <p className="error__text"> Возможно, страница была удалена или<br />её вовсе не существовало.</p>
            <button
              className="button button__error button--small button--black-border"
              onClick={() => navigate(AppRoute.Catalog)}
            >
              Продолжить покупки
            </button>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export default NotFoundPage;
