import { News } from '@helix-ai/entities'
import { PartialType } from '@nestjs/mapped-types'

export class CreateNewsDto extends PartialType(News) {
  title: string

  description: string

  content: string

  image: string

  alt: string

  added_by: number
}
