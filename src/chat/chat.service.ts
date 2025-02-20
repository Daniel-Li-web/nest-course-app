import { Injectable } from '@nestjs/common';
@Injectable()
export class ChatService {
  shareFunc(): string {
    return 'Hello from ChatService';
  }
  globalFunc(): string {
    return 'use global module';
  }
}
