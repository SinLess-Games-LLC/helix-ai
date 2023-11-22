import { TechCategory } from '@helix-ai/entities-enums'

export class CreateTechnologyDto {
  name: string

  description: string

  logo: string

  category1: TechCategory

  category2: TechCategory

  website: string

  added_by: number
}
