import { Module } from '@nestjs/common'
import { TechnologyService } from './technology.service'
import { TechnologyController } from './technology.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Technology } from '@helix-ai/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Technology])],
  controllers: [TechnologyController],
  providers: [TechnologyService],
})
export class TechnologyModule {}
