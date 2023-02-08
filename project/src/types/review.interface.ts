import { IUserData } from './user-data.interface';

export interface IReview {
  id?: string;
  author?: IUserData;
  advantages: string;
  disadvantages: string;
  comment: string;
  rating: number;
  date?: Date;
}
