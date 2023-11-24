import { PartialType } from '@nestjs/mapped-types'
import { Technology } from '@helix-ai/entities'
import { TechCategory } from '@helix-ai/entities-enums'

export class CreateTechnologyDto extends PartialType(Technology) {
  id: number
  name: string
  description: string
  content: string
  image: string
  alt: string
  slug: string
  website: string
  added_by: number
  category1: TechCategory
  category2: TechCategory
}
