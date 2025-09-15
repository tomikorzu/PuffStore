import { Categories, Flavours } from "@/modules/shared/constants/product";

export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
  percentageDiscount: number;
  category: Categories;
  flavour: Flavours[];
  sales: number;
}
