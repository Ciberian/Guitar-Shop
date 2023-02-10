import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import FormRating from '../../../components/form-elements/form-rating/form-rating';
import { ChangeEvent } from 'react';

function CatalogPage(): JSX.Element {
  const formDataChangeHandler = ({ target }: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => null;

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <FormRating ratingChangeHandler={formDataChangeHandler}/>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
