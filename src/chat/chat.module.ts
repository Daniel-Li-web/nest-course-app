import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { UtilityModule } from 'src/shared/utility/utility.module';

@Module({
  providers: [ChatService],
  exports: [ChatService],
  controllers: [ChatController],
  imports: [UtilityModule],
})
export class ChatModule {}
