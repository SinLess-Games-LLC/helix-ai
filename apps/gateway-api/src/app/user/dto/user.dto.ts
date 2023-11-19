import { UserSetting, UserProfile, Role } from '@helix-ai/nest-entities'

export class UserDto {
  user_name: string
  email: string
  password: string
  role: Role
  profile_id: number
  profile: UserProfile
  settings_id: number
  settings: UserSetting
}
