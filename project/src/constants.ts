export const AppRoute = {
  Root: '/',
  Catalog: '/catalog',
  Item: '/catalog/item/:id',
  Cart: '/catalog/cart/',
  Items: '/items/',
  AddItem: '/items/add_item',
  EditItem: '/items/edit_item/:id',
  Orders: '/orders/',
  Order: '/orders/order/:id',
  Login: '/login',
  Register: '/register',
  NotFoundPage: '/not_found_page',
  MyAccount: '/my_account'
} as const;

export const APIRoute = {
  Items: '/items',
  Cart: '/cart',
  Login: '/login',
  Logout: '/logout',
  Reviews: '/reviews',
  Orders: '/orders',
} as const;

export const SortType = {
  Popular: 'Popular',
  PriceToHigh: 'Price: low to high',
  PriceToLow: 'Price: high to low',
  TopRated: 'Top rated first'
} as const;

export const NameSpace = {
  Data: 'DATA',
  User: 'USER',
  Sort: 'SORT',
  Item: 'ITEM',
  Error: 'ERROR',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const SORT_TYPES = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first'
];


export const TIMEOUT_SHOW_ERROR = 3000;

export const RATINGS = [1, 2, 3, 4, 5];

export const MAX_REVIEW_RATING = 5;

export const MIN_REVIEW_RATING = 1;

export const RATING_TITLES = [
  'Ужасно',
  'Плохо',
  'Нормально',
  'Хорошо',
  'Отлично'
];

export const DEFAULT_ITEM_ID = 0;

export const MOCK_ITEMS_COUNT = 10;

export const MOCK_REVIEWS_COUNT = 10;
