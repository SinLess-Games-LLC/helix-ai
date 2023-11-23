import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

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
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import {
  Microservice,
  News,
  Technology,
  User,
  UserProfile,
  UserSetting,
  Account,
  Session,
  HelixConfiguration,
} from '@helix-ai/utilities'

const config = new HelixConfiguration()

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.database.mysql.net.host,
      port: config.database.mysql.net.port,
      username: config.database.mysql.user.username,
      password: config.database.mysql.user.password,
      database: config.database.mysql.database.name,
      autoLoadEntities: true,
      synchronize: true,
      cache: {
        duration: 30000, // 30 seconds
        tableName: 'helix-orm-cache',
      },
      metadataTableName: 'helix-orm-metadata',
    }),
    TypeOrmModule.forFeature([
      User,
      UserSetting,
      UserProfile,
      Microservice,
      Technology,
      News,
      Account,
      Session,
    ]),
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
