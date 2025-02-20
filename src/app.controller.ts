import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // localhost:3000
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/showname') // localhost:3000/showname
  getName(): string {
    return this.appService.getName();
  }
  @Get('/showinformation') // localhost:3000/showinformation
  getinformation(): string {
    return this.appService.getinformation();
  }
  @Get('/showHobby') // localhost:3000/showHobby
  getHobby(): string {
    return this.appService.getHobby();
  }
  @Get('/showJson') // localhost:3000/showJson
  getJson() {
    return this.appService.getJson();
  }
  @Get('/showEducation') // localhost:3000/showEducation
  getEducation(): string {
    return this.appService.getEducation();
  }
  @Get('/showJson2') // localhost:3000/showJson2
  getJson2() {
    return this.appService.getJson2();
  }
  @Get('/showGit') // localhost:3000/showGit\
  getGit(): string {
    return this.appService.getGit();
  }
  @Get('/usepostman') // localhost:3000/usepostman
  getPostman(): string {
    return this.appService.getPostman();
  }
}
