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
} from '@helix-ai/entities'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
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
