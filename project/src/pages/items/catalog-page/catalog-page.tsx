import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { ChangeEvent } from 'react';
import Checkbox from '../../../components/form-elements/checkbox/checkbox';

function CatalogPage(): JSX.Element {
  const formDataChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = target;
    // eslint-disable-next-line no-console
    console.log(name);
    // eslint-disable-next-line no-console
    console.log(checked);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '380px', margin: '40px auto'}}>
          <Checkbox
            name='electric'
            label='Электрогитары'
            checkboxChangeHandler={formDataChangeHandler}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
