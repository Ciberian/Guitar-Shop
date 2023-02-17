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
  DateFromOld: 'по дате-возрастание',
  DateFromNew: 'по дате-убывание',
  PriceToHigh: 'по цене-возрастание',
  PriceToLow: 'по цене-убывание',
  PopularToHigh: 'по популярности-возрастание',
  PopularToLow: 'по популярности-убывание',
} as const;

export const NameSpace = {
  Items: 'ITEMS',
  User: 'USER',
  Sort: 'SORT',
  Error: 'ERROR',
} as const;

export const GuitarType = {
  'электро': 'Электрогитара',
  'аккустика': 'Акустическая гитара',
  'укулеле': 'Укулеле',
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

export const RATINGS = [1, 2, 3, 4, 5];

export const MAX_REVIEW_RATING = 5;

export const MIN_REVIEW_RATING = 1;

export const RATING_TITLES = [
  'Ужасно',
  'Плохо',
  'Нормально',
  'Хорошо',
  'Отлично',
];

export const BTN_SIZES = [
  'button--mini',
  'button--small',
  'button--medium',
  'button--big',
] as const;

export const BTN_TYPES = [
  'button--in-cart',
  'button--add-to-cart',
  'button--up',
  'edit-item-image__btn',
  'cart__order-button',
] as const;

export const BTN_STYLES = [
  'button--red-border',
  'button--black-border',
  'button--red',
] as const;

export const DEFAULT_REVIEW_FORM_STATE = {
  rating: 0,
  advantage: '',
  disadv: '',
  comment: '',
};

export const TIMEOUT_SHOW_ERROR = 3000;
export const DEFAULT_ITEM_ID = 0;

export const MOCK_ITEMS_COUNT = 3;
export const MOCK_REVIEWS_COUNT = 10;

export const MIN_IMG_ID = 1;
export const MAX_IMG_ID = 100;

export const MIN_ADV_DISADV_LENGTH = 50;
export const MAX_ADV_DISADV_LENGTH = 100;

export const MIN_COMMENT_LENGTH = 5;
export const MAX_COMMENT_LENGTH = 1024;

export const TEXT_FIELD_ERROR_MESSAGE = {
  EmptyField: 'Заполните поле.',
  МinCharacters: 'Минимальная длина 50 символов.',
  МaxCharacters: 'Максимальная длина 100 символов.',
  МinCharactersForComment: 'Минимальная длина 5 символов',
  МaxCharactersForComment: 'Максимальная длина 1024 символа.',
} as const;
