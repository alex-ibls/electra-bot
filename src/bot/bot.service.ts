import { Ctx, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class BotService {
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply(`
    Привет, мы автомобильный женский клуб Электра.
    
    У нас про это ….
    
    Мы «за»
    
    Мы «против»
    
    У нас такие правила 
    
    у нас запрещено
    
    У нами у тебя появятся возможности для…
    
    Если ты прочитал и тебе ок , то важно пройти фильтр на взрослость: 
    `);
  }
}
