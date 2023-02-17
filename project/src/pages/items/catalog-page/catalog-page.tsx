/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { makeFakeOrders } from '../../../utils/mocks';
import OrdersList from '../../../components/page-components/orders-list/orders-list';

function CatalogPage(): JSX.Element {
  const orders = makeFakeOrders();

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '940px', margin: '140px auto'}}>
          <OrdersList orders={orders} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
