import { datatype, name, internet, random, date } from 'faker';
import { IItem } from '../types/item.interface';
import { IUserData } from '../types/user-data.interface';
import { IReviewData } from '../types/review-data.interface';
import { MAX_IMG_ID, MIN_IMG_ID, MOCK_ITEMS_COUNT, MOCK_REVIEWS_COUNT } from '../constants';
import { getRandomInt } from './helpers';

export const makeFakeUserInfo = (): IUserData => ({
  id: datatype.number(),
  email: internet.email(),
  isAdmin: datatype.boolean(),
  name: name.firstName(),
  token: datatype.string(),
});

export const makeFakeItem = (id: number, imgWidth: number, imgHeight: number): IItem => ({
  id: id,
  name: random.words(3),
  description: random.words(15),
  image: `https://picsum.photos/id/${getRandomInt(MIN_IMG_ID, MAX_IMG_ID)}/${imgWidth}/${imgHeight}`,
  type: 'аккустика',
  sku: random.word(),
  strings: 6,
  rating: datatype.number({ min: 0, max: 5, precision: 0.1 }),
  price: datatype.number({ min: 100, max: 1000 }),
  reviewsCount: datatype.number({ min: 0, max: 10 }),
  date: date.recent(),
});

export const makeFakeReview = (): IReviewData => ({
  authorName: name.firstName(),
  advantage: random.words(22),
  disadv: random.words(22),
  comment: random.words(22),
  rating: datatype.number({ min: 0, max: 5, precision: 0.1 }),
  date: date.recent(),
});

export const makeFakeItems = (imgWidth: number, imgHeight: number) => (
  new Array(MOCK_ITEMS_COUNT).fill(null).map((_item, index) => makeFakeItem(index, imgWidth, imgHeight))
);

export const makeFakeReviews = () => (
  new Array(MOCK_REVIEWS_COUNT).fill(null).map(() => makeFakeReview())
);
