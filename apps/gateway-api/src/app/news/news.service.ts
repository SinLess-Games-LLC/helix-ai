import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateNewsDto } from './dto/create-news.dto'
import { UpdateNewsDto } from './dto/update-news.dto'
import { News } from '@helix-ai/nest-entities'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { from } from 'rxjs'

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>
  ) {}
  async create(createNewsDto: CreateNewsDto) {
    const exists = await this.newsRepository.findOne({
      where: { title: createNewsDto.title },
    })

    if (exists) {
      throw new HttpException('News already exists', HttpStatus.BAD_REQUEST)
    }

    const news = new News()
    news.title = createNewsDto.title
    news.description = createNewsDto.description
    news.image = createNewsDto.image
    news.alt = createNewsDto.alt
    news.content = createNewsDto.content
    news.added_by = createNewsDto.added_by

    return from(this.newsRepository.save(news))
  }

  findAll() {
    return from(this.newsRepository.find())
  }

  findOne(id: number) {
    return from(this.newsRepository.findOne({ where: { id } }))
  }

  update(id: number, updateNewsDto: UpdateNewsDto) {
    return from(this.newsRepository.update(id, updateNewsDto))
  }

  remove(id: number) {
    return from(this.newsRepository.delete(id))
  }
}
