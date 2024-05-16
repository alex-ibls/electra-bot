import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
  MethodNotAllowedException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { isTgHashValid } from './validate.hash';

@Injectable()
export class BotGuard implements CanActivate {
  private readonly logger = new Logger('guard-service');
  constructor(private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    if (req.method !== 'POST') {
      console.log('not post');
      throw new MethodNotAllowedException();
    }

    if (!req.body.hash) {
      console.log('ho hash');
      throw new BadRequestException();
    }

    if (!process.env.BOT_TOKEN) {
      console.log('no token');
      throw new InternalServerErrorException();
    }
    return await isTgHashValid(req.body.hash, process.env.BOT_TOKEN);
  }
}
