import { UserSetting, UserProfile } from '@helix-ai/entities'
import { Role } from '@helix-ai/entities-enums'

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
