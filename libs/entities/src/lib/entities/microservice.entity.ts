import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { UserProfile } from './user-profile.entity'
import slugify from 'slugify'

@Entity()
export class Microservice {
  @PrimaryGeneratedColumn()
  id: number | undefined

  @Column()
  name: string | undefined

  @Column('text')
  description: string | undefined

  @Column()
  logo: string | undefined

  @ManyToOne(
    () => UserProfile,
    (userProfile) => userProfile.microservices_added
  )
  added_by: number | undefined

  @Column({ unique: true, default: '' })
  slug: string | undefined

  @UpdateDateColumn()
  updatedAt: Date | undefined

  @CreateDateColumn()
  createdAt: Date | undefined

  @BeforeInsert()
  async generateSlug() {
    if (typeof this.name === 'string') {
      this.slug = slugify(this.name, '_')
    }
    return this.slug
  }
}
