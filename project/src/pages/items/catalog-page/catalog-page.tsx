/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import CartAdd from '../../../components/modal/cart-add/cart-add';
import { makeFakeItem } from '../../../utils/mocks';
import { DEFAULT_ITEM_ID } from '../../../constants';
import { IItem } from '../../../types/item.interface';

function CatalogPage(): JSX.Element {
  const addItemToCartHandler = (item: IItem) => {
    console.log('New item in cart - ', item);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <CartAdd
            modalTitle='Добавить товар в корзину'
            item={makeFakeItem(DEFAULT_ITEM_ID, 67, 137)}
            addToCartHandler={addItemToCartHandler}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
