import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CategoryType } from 'src/interfaces/products.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts(@Query() query: { type: CategoryType }) {
    return query;
  }

  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }
}
