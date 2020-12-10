import Axios from 'axios';
import Product from '../../domain/Product';

const ProductService = {
  fetchAll: async (): Promise<Product[]> => {
    return Axios.get<Product[]>('/products').then(result => result.data);
  },
  fetch: async (code: string): Promise<Product> => {
    return Axios.get<Product>(`/products/${code}`).then(result => result.data);
  },
};

export default ProductService;
