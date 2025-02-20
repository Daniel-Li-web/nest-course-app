import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  productFunction(): string {
    return 'we use product service';
  }
  getJson() {
    return {
      name: 'Daniel',
      age: 18,
      hobby: 'basketball',
    };
  }
}
