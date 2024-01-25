import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(): any[] {
    return [];
  }

  @Get(':id')
  getMessage(): any {
    // return this.appService.getHello();
  }

  @Post()
  createMessage(): any[] {
    return [];
  }
}
