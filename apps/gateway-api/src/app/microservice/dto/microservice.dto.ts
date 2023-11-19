import { Technology } from '@helix-ai/nest-entities'

export class MicroserviceDto {
  name: string

  description: string

  logo: string

  technologies: Technology[]

  added_by: number
}
