/* eslint-disable no-console */
import SiteHeader from '../../../components/page-components/site-header/site-header';
import SiteFooter from '../../../components/page-components/site-footer/site-footer';
import ReviewItem from '../../../components/page-components/review-item/review-item';
import { makeFakeReviews } from '../../../utils/mocks';

function CatalogPage(): JSX.Element {
  const reviews = makeFakeReviews();

  return (
    <>
      <SiteHeader />
      <main className='page-content'>
        <div style={{width: '940px', margin: '140px auto'}}>
          <ReviewItem review={reviews[0]} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export default CatalogPage;
