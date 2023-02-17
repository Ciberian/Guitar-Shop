/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';

function CatalogPage(): JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <h1>Catalog Page</h1>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
