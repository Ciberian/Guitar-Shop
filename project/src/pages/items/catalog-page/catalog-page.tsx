import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { ChangeEvent, useState } from 'react';
import CustomInput from '../../../components/form-elements/custom-input/custom-input';

function CatalogPage(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const formDataChangeHandler = ({target}: ChangeEvent<HTMLInputElement>) => {
    const { name } = target;
    setInputValue(target.value);
    // eslint-disable-next-line no-console
    console.log(name);
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <CustomInput
            name='title'
            label='Наименование товара'
            placeholder='Наименование'
            value={inputValue}
            inputValueChangeHandler={formDataChangeHandler}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
