/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import Catalog from '../../../components/page-components/catalog/catalog';
import { makeFakeItems } from '../../../utils/mocks';

function CatalogPage(): JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '700px', margin: '40px auto'}}>
          <Catalog items={makeFakeItems(75, 190)} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
