import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';
@Module({
  providers: [OrderService],
  exports: [OrderService],
  controllers: [OrderController],
  imports: [UtilityModule],
})
export class OrderModule {}
