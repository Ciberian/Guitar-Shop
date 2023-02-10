import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import ReviewList from '../../../components/page-components/reviews-list/reviews-list';
import LoadingScreen from '../../../components/system-components/loading-screen/loading-screen';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { AppRoute, AuthorizationStatus } from '../../../constants';
import { getAuthorizationStatus } from '../../../store/user-process/selectors';
import { fetchItemAction, fetchReviewsAction } from '../../../store/api-actions';
import { getLoadedItemStatus, getItem, getReviews } from '../../../store/items-data/selectors';

function ItemPage(): JSX.Element {
  const isOfferLoaded = useAppSelector(getLoadedItemStatus);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.Auth;
  const offer = useAppSelector(getItem);
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    dispatch(fetchItemAction(Number(id)));
    dispatch(fetchReviewsAction(Number(id)));
  }, [id, dispatch]);

  if (!isOfferLoaded) {
    return <LoadingScreen />;
  }

  if (!offer) {
    navigate(AppRoute.NotFoundPage);
  }

  return (
    <div className="page">
      <SiteHeader />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">{isAuthorized}</div>
          </div>
        </section>
        <section className="property__reviews reviews">{reviews ? <ReviewList reviews={reviews} /> : null}</section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
          </section>
        </div>
      </main>
    </div>
  );
}

export default ItemPage;
