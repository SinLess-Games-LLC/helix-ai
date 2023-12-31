import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import {
  Sex,
  Gender,
  Sexuality,
  Pronoun,
  Country,
} from '@helix-ai/entities-enums'
import { Microservice, MicroserviceInterface } from './microservice.entity'
import { Technology, TechnologyInterface } from './technology.entity'
import { News, NewsInterface } from './news.entity'

export interface UserProfileInterface {
  id: number | undefined
  firstName: string | undefined
  middleName: string | undefined
  lastName: string | undefined
  avatar: string | undefined
  birthday: Date | undefined
  sex: Sex | undefined
  Gender: Gender | undefined
  sexualOrientation?: Sexuality | undefined
  Pronoun: Pronoun | undefined
  country: Country | undefined
  microservices_added: MicroserviceInterface[] | undefined
  technologies_added: TechnologyInterface[] | undefined
  news_added: NewsInterface[] | undefined
  email_verified: boolean | undefined
  age_verified: boolean | undefined
  updatedAt: Date | undefined
  createdAt: Date | undefined
}

@Entity()
/**
 * @class UserProfile
 * @description
 * A user profile is a collection of information about a user.
 */
export class UserProfile {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column({ nullable: true })
  firstName: string | undefined

  @Column({ nullable: true })
  middleName: string | undefined

  @Column({ nullable: true })
  lastName: string | undefined

  @Column({ nullable: true })
  avatar: string | undefined

  @Column({ nullable: true })
  birthday: Date | undefined

  @Column({ type: 'enum', enum: Sex, default: Sex.PreferNotToSay })
  sex: Sex | undefined

  @Column({ type: 'enum', enum: Gender, default: Gender.PreferNotToSay })
  Gender: Gender | undefined

  @Column({ type: 'enum', enum: Sexuality, default: Sexuality.PreferNotToSay })
  sexualOrientation?: Sexuality | undefined

  @Column({ type: 'enum', enum: Pronoun, default: Pronoun.Other })
  Pronoun: Pronoun | undefined

  @Column({ type: 'enum', enum: Country, default: Country.PreferNotToSay })
  country: Country | undefined

  @OneToMany(() => Microservice, (microservice) => microservice.added_by, {
    eager: true,
  })
  @JoinColumn()
  microservices_added: Microservice[] | undefined

  @OneToMany(() => Technology, (technology) => technology.added_by, {
    eager: true,
  })
  @JoinColumn()
  technologies_added: Technology[] | undefined

  @OneToMany(() => News, (news) => news.added_by, {
    eager: true,
  })
  @JoinColumn()
  news_added: News[] | undefined

  @Column({ default: false })
  email_verified: boolean | undefined

  @Column({ default: false })
  age_verified: boolean | undefined

  @UpdateDateColumn()
  updatedAt: Date | undefined

  @CreateDateColumn()
  createdAt: Date | undefined
}
