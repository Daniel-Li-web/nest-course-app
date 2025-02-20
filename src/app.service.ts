import { Injectable } from '@nestjs/common';

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
      hobby: 'basketball',
    };
  }
  getJson2() {
    return {
      name: 'Daniel2',
      lastname: 'Li2',
      age: 18,
      hobby: 'basketball2',
    };
  }
  getGit(): string {
    return 'git and github using';
  }
  getPostman(): string {
    return 'we use Postman ';
  }
  getEducation(): string {
    return 'I am a student at the University of Washington';
  }
}
