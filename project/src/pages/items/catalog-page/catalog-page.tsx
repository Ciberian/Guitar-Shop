/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import OrderItem from '../../../components/page-components/order-item/order-item';
import { makeFakeOrders } from '../../../utils/mocks';

function CatalogPage(): JSX.Element {
  const orders = makeFakeOrders();

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '940px', margin: '140px auto'}}>
          <OrderItem order={orders[0]} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
