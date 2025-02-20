import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { UtilityService } from 'src/shared/utility/utility.service';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/shared')
  sharedFunc(): string {
    return this.utilityService.shareFunc();
  }

  @Get()
  productFunction(): string {
    return this.productService.productFunction();
  }
  @Get('/showJson')
  getJson() {
    return this.productService.getJson();
  }
  @Get('/global')
  globalFunc(): string {
    return this.globalHelperService.globalFunc();
  }
}
