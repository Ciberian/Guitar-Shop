/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import CatalogItem from '../../../components/page-components/catalog-item/catalog-item';
import { makeFakeItem } from '../../../utils/mocks';
import { DEFAULT_ITEM_ID } from '../../../constants';

function CatalogPage(): JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <CatalogItem item={makeFakeItem(DEFAULT_ITEM_ID, 75, 190)} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
