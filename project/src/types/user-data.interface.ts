export interface IUserData {
  id?: number;
  name: string;
  email?: string;
  isAdmin?: boolean;
  cartItems?: number[];
  orders?: number[];
  token: string;
}
