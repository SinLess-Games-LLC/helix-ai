import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NestEntitiesModule } from '@helix-ai/nest-entities'

@Module({
  imports: [NestEntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
