export interface IItem {
  id: number;
  name: string;
  description: string;
  image: string;
  type: 'аккустика' | 'электро' | 'укулеле';
  sku: string;
  strings: 4 | 6 | 7 | 12;
  rating: number;
  price: number;
  reviewsCount?: number;
  date: Date;
}
