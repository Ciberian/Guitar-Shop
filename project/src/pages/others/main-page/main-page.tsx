import { useAppSelector } from '../../../hooks/index';
import SiteHeader from '../../../components/page-components/site-header/site-header';
import LocationList from '../../../components/location-list/location-list';
import OfferListEmpty from '../../../components/offer-list-empty/offer-list-empty';
import SortOffers from '../../../components/sort-offers/sort-offers';
import OfferList from '../../../components/offer-list/offer-list';
import { Offer } from '../../../types/user-data.interface';
import { SortType } from '../../../constants';
import { getOffers } from '../../../store/offers-data/selectors';
import { getCity } from '../../../store/selected-city/selectors';
import { getSortType } from '../../../store/selected-sort/selectors';

function MainPage(): JSX.Element {
  const cityName = useAppSelector(getCity);
  const allOffers = useAppSelector(getOffers);
  const currentSortType = useAppSelector(getSortType);

  if (allOffers.length) {
    const sortOffers = (sortType: string, offers: Offer[]) => {
      switch (sortType) {
        case SortType.Popular:
          return offers;
        case SortType.PriceToHigh:
          return offers.slice().sort((offerA, offerB) => offerA.price - offerB.price);
        case SortType.PriceToLow:
          return offers.slice().sort((offerA, offerB) => offerB.price - offerA.price);
        case SortType.TopRated:
          return offers.slice().sort((offerA, offerB) => offerB.rating - offerA.rating);
        default:
          return offers;
      }
    };

    return (
      <div className="page page--gray page--main">
        <SiteHeader />

        <main className={`page__main page__main--index ${cityOffers ? '' : 'page__main--index-empty'}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList />
            </section>
          </div>
          <div className="cities">
            {cityOffers ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${cityOffers?.length} places to stay in ${cityName}`}</b>
                  <SortOffers />
                  <div className="cities__places-list places__list tabs__content">
                    <OfferList offers={sortOffers(currentSortType, cityOffers)} classPrefix={'cities'} />
                  </div>
                </section>
              </div>
            ) : (
              <OfferListEmpty cityName={cityName} />
            )}
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="page page--gray page--main">
        <SiteHeader />
        <main className={'page__main page__main--index page__main--index-empty'}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <LocationList />
            </section>
          </div>
          <div className="cities">
            <OfferListEmpty cityName={cityName} />
          </div>
        </main>
      </div>
    );
  }
}
export default MainPage;
