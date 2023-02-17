import { IUserData } from './user-data.interface';

export interface IReview {
  id: number;
  author: IUserData;
  advantage: string;
  disadv: string;
  comment: string;
  rating: number;
  date: Date;
}
