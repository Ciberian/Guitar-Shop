/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { makeFakeItems } from '../../../utils/mocks';
import ItemsList from '../../../components/page-components/items-list/items-list';

function CatalogPage(): JSX.Element {
  const fakeItems = makeFakeItems(36, 93);

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '940px', margin: '140px auto'}}>
          <ItemsList items={fakeItems} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
