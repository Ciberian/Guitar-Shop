/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import CartDelete from '../../../components/modal/cart-delete/cart-delete';
import { makeFakeItem } from '../../../utils/mocks';
import { DEFAULT_ITEM_ID } from '../../../constants';
import { IItem } from '../../../types/item.interface';

function CatalogPage(): JSX.Element {
  const deleteItemFromCart = (item: IItem) => {
    console.log('This item will be removed from cart - ', item);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <CartDelete
            modalTitle='Удалить этот товар?'
            item={makeFakeItem(DEFAULT_ITEM_ID, 67, 137)}
            cartDeleteHandler={deleteItemFromCart}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
