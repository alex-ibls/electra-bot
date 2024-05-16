import { Module, OnModuleInit } from '@nestjs/common';
import { BotService } from './bot.service';

@Module({
  providers: [BotService],
})
export class BotModule implements OnModuleInit {

  constructor(botService: BotService){}
  onModuleInit() {
    
  }
}
