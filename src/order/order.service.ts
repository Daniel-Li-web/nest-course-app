import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderService {
  shareFunc(): string {
    return 'Hello from OrderService';
  }
}
