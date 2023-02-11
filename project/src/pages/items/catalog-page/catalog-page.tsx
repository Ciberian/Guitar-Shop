import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import Tabs from '../../../components/common/tabs/tabs';
import { fakeItem } from '../../../utils/mocks';

function CatalogPage(): JSX.Element {

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '380px', margin: '40px auto'}}>
          <Tabs item={fakeItem}/>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
