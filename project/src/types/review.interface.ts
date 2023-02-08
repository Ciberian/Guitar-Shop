import { IUser } from './user.interface';

export interface IReview {
  id?: string;
  author?: IUser;
  advantages: string;
  disadvantages: string;
  comment: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date?: Date;
}
