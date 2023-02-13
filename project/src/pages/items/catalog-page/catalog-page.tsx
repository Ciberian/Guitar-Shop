/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import SuccessReview from '../../../components/modal/success-review/success-review';

function CatalogPage(): JSX.Element {


  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <SuccessReview />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
