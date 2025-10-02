import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CategoryType } from 'src/interfaces/products.interface';
import { Public } from '../auth/decorators/public.decorator';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Public()
  @Get()
  getAllProducts(@Query() query: { type: CategoryType }) {
    return query;
  }

  @Public()
  @Get(':id')
  getProductById(@Param('id') id: number) {
    return this.productsService.getProductById(id);
  }
}
