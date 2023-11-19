import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { NestEntitiesModule } from '@helix-ai/nest-entities'

/**
 * Module imports
 */

import { AuthModule } from './auth/auth.module'
import { MicroserviceModule } from './microservice/microservice.module'
import { NewsModule } from './news/news.module'
import { TechnologyModule } from './technology/technology.module'
import { UserModule } from './user/user.module'
import { UserProfileModule } from './user-profile/user-profile.module'
import { UserSettingsModule } from './user-settings/user-settings.module'

@Module({
  imports: [
    NestEntitiesModule,
    AuthModule,
    MicroserviceModule,
    NewsModule,
    TechnologyModule,
    UserModule,
    UserProfileModule,
    UserSettingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
