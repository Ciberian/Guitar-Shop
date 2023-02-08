export enum AppRoute {
  Root = '/',
  Login = '/login',
  Register = '/register',
  Catalog = '/catalog',
  Item = '/item/:id',
  Cart = '/cart/',
  AddItem = 'add_item',
  EditItem = 'edit_item',
  Items = 'items',
  Order = 'order',
  Orders = 'orders',
  NotFoundPage = '/not_found_page'
}

export enum APIRoute {
  Items = '/items',
  Cart = '/cart',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/reviews',
  Orders = '/orders',
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

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
  Sort = 'SORT',
  Item = 'ITEM',
  Error = 'ERROR',
}

export const TIMEOUT_SHOW_ERROR = 3000;

export const ONE_STAR_RATING_IN_PERCENT = 20;
