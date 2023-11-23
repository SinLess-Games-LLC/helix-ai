import { TechCategory } from '@helix-ai/entities-enums'
import { PartialType } from '@nestjs/mapped-types'
import { Technology } from '@helix-ai/entities'

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
}
