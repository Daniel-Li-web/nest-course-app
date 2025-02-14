import { Injectable } from '@nestjs/common';
import { last } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'We love NestUS!';
  }
  getName(): string {
    return 'Daniel';
  }
  getinformation(): string {
    return 'I am Daniel and I am 18 years old';
  }
  getHobby(): string {
    return 'I love to play basketball';
  }
  getJson() {
    return {
      name: 'Daniel',
      lastname: 'Li',
      age: 18,
      hobby: 'basketball'
    }
  }
  getEducation(): string {
    return 'Daniel is a student at the University of Washington';
  }
}