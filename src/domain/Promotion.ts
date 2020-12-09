export default interface Promotion {
  id: string;
  type: string;
  amount?: number;
  price?: number;
  required_qty?: number;
  free_qty?: number;
}
