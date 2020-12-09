import Promotion from './Promotion';

export default interface Product {
  id: string;
  name: string;
  price: number;
  promotions?: Promotion[];
}
