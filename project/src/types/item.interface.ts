export interface IItem {
  id?: string;
  name: string;
  description: string;
  image: string;
  type: 'электро' | 'аккустика' | 'укулеле';
  code: string;
  strings: 4 | 6 | 7 | 12;
  rating?: number;
  price: number;
  reviewsCount?: number;
  date?: Date;
}
