import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { HelixConfiguration } from '@helix-ai/utilities'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DiscordModule } from '@discord-nestjs/core'
import { IntentsBitField } from 'discord.js'
import {
  Account,
  Microservice,
  News,
  Session,
  Technology,
  User,
  UserProfile,
  UserSetting,
} from '@helix-ai/entities'
import { TrpcModule } from '@helix-ai/trpc'
import { TrpcRouter } from './trpc.router'
import { UtilityRouter } from './routes/utility.router'

const config = new HelixConfiguration()
// @see https://discord-intents-calculator.vercel.app/
const intents = new IntentsBitField(3276799)

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DiscordModule.forRootAsync({
      useFactory: () => ({
        token: config.discord.bot.token,
        discordClientOptions: {
          intents: intents,
        },
      }),
    }),
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
    TrpcModule,
  ],
  controllers: [AppController],
  providers: [AppService, TrpcRouter, UtilityRouter],
})
export class AppModule {}
