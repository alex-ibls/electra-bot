import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN,
    }),
    BotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
