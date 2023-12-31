import { Module } from '@nestjs/common'
import { UserSettingsService } from './user-settings.service'
import { UserSettingsController } from './user-settings.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserSetting } from '@helix-ai/entities'

@Module({
  imports: [TypeOrmModule.forFeature([UserSetting])],
  controllers: [UserSettingsController],
  providers: [UserSettingsService],
})
export class UserSettingsModule {}
