import {
  Body,
  Controller,
  HttpCode,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { BotGuard } from 'src/auth/auth.guard';

@Controller('webhook')
export class WebhookController {
  @UseGuards(BotGuard)
  @HttpCode(200)
  @Post()
  async status(@Body() body, @Res({ passthrough: true }) res: Response) {
    console.log(body);
    return;
  }
}
