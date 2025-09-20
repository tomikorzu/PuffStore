import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getAllProducts() {}

  getProductById(id: number) {
    return id;
  }
}
