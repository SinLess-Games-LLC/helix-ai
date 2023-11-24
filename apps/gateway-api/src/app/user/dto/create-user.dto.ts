import { PartialType } from '@nestjs/mapped-types'
import { User } from '@helix-ai/entities'

export class CreateUserDto extends PartialType(User) {
  email!: string
  password!: string
}
