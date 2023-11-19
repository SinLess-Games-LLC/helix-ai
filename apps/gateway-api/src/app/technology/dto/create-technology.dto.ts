import { TechCategory } from '@helix-ai/nest-entities'

export class CreateTechnologyDto {
  name: string

  description: string

  logo: string

  category1: TechCategory

  category2: TechCategory

  website: string

  added_by: number
}
