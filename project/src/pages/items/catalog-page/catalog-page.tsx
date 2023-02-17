/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { makeFakeItems } from '../../../utils/mocks';
import CartItemsList from '../../../components/page-components/cart-items-list/cart-items-list';

function CatalogPage(): JSX.Element {
  const fakeItems = makeFakeItems(75, 190);

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '940px', margin: '140px auto'}}>
          <CartItemsList items={fakeItems} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
