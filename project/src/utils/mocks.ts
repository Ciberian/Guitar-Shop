import { datatype, name, internet, image, random, date } from 'faker';
import { IItem } from '../types/item.interface';
import { IUserData } from '../types/user-data.interface';
import { IReviewData } from '../types/review-data.interface';
import { DEFAULT_ITEM_ID, MOCK_ITEMS_COUNT, MOCK_REVIEWS_COUNT } from '../constants';

export const makeFakeUserInfo = (): IUserData => ({
  id: datatype.number(),
  email: internet.email(),
  isAdmin: datatype.boolean(),
  name: name.firstName(),
  token: datatype.string(),
});

export const makeFakeItem = (id: number): IItem => ({
  id: id,
  name: random.words(3),
  description: random.words(15),
  image: image.imageUrl(),
  type: 'аккустика',
  code: random.word(),
  strings: 6,
  rating: datatype.number({ min: 0, max: 5, precision: 0.1}),
  price: datatype.number({min: 100, max: 1000}),
  reviewsCount: datatype.number({min: 0, max: 10}),
  date: date.recent(),
});

export const makeFakeReview = (): IReviewData => ({
  authorName: name.firstName(),
  advantages: random.words(22),
  disadvantages: random.words(22),
  comment: random.words(22),
  rating: datatype.number({ min: 0, max: 5, precision: 0.1 }),
  date: date.recent(),
});

export const fakeReview = makeFakeReview();

export const fakeItem = makeFakeItem(DEFAULT_ITEM_ID);

export const fakeItems = new Array(MOCK_ITEMS_COUNT).fill(null).map((_item, index) => makeFakeItem(index));

export const fakeReviews = new Array(MOCK_REVIEWS_COUNT).fill(null).map(() => makeFakeReview());
