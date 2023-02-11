import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import { ChangeEvent, useState } from 'react';
import CustomTextarea from '../../../components/form-elements/custom-textarea/custom-textarea';

function CatalogPage(): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const formDataChangeHandler = ({target}: ChangeEvent<HTMLTextAreaElement>) => {
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
          <CustomTextarea
            label='Описание товара'
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
