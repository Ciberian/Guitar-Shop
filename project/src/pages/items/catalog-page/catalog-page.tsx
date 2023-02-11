import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import Tabs from '../../../components/common/tabs/tabs';

function CatalogPage(): JSX.Element {

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '380px', margin: '0 auto'}}>
          <Tabs />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
