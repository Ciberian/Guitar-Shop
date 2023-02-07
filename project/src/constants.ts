export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NotFoundPage = '/not_found_page'
}

export enum APIRoute {
  Offers = '/hotels',
  Favorites = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SortType {
  Popular = 'Popular',
  PriceToHigh = 'Price: low to high',
  PriceToLow = 'Price: high to low',
  TopRated = 'Top rated first'
}

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Sort = 'SORT',
  City = 'CITY',
  Error = 'ERROR',
  Point = 'POINT'
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const TIMEOUT_SHOW_ERROR = 3000;

export const ONE_STAR_RATING_IN_PERCENT = 20;

export const DEFAULT_OFFER_ID = 0;

export const MOCK_OFFERS_COUNT = 10;

export const MOCK_REVIEWS_COUNT = 10;
