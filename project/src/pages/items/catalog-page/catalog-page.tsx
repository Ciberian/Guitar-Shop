/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import ReviewsList from '../../../components/page-components/reviews-list/reviews-list';
import { makeFakeReviews } from '../../../utils/mocks';

function CatalogPage(): JSX.Element {
  const reviews = makeFakeReviews();
  const makeActiveModalWindow = () => {
    console.log('Modal has "is-active" class');
  };

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '940px', margin: '140px auto'}}>
          <ReviewsList reviews={reviews} makeActiveModalWindow={makeActiveModalWindow} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
