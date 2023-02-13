/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import ReviewForm from '../../../components/modal/review-form/review-form';

function CatalogPage(): JSX.Element {
  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '390px', margin: '40px auto'}}>
          <ReviewForm itemId={1} itemName='Гитара AGMX100500' />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
