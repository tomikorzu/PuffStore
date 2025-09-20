import { CategoryType, VaperType } from 'src/interfaces/products.interface';

export interface GetProductDto {
  id: number;
  name: string;
  category: CategoryType;
  price: number;
  description?: string;
  image?: string;
  stock: number;
  percentageDiscount?: number;
  rating?: number;
  sales: number;
  type: VaperType;
  puff?: number;
  ml?: number;
  createdAt: Date;
  updatedAt: Date;
  purchases: number;
  reviews: number;
}
