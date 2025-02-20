import { Injectable } from '@nestjs/common';
@Injectable()
export class UserService {''
  shareFunc(): string {
    return 'Hello from UserService';
  }
}
