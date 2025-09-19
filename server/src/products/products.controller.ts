import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAllProducts() {}

  @Get(':id')
  getProductById() {}
}
