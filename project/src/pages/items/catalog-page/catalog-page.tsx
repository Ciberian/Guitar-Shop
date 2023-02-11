import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import StringsQuantitySelector from '../../../components/form-elements/strings-quantity-selector/strings-quantity-selector';
import { ChangeEvent } from 'react';

function CatalogPage(): JSX.Element {
  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = target;
    // eslint-disable-next-line no-console
    console.log(name);
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '380px', margin: '40px auto'}}>
          <StringsQuantitySelector extraClass='add-item__form-radio' stringsQuantityChangeHandler={formDataChangeHandler}/>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
