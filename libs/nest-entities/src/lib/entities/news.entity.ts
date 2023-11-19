import { UserProfile } from './user-profile.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import slugify from 'slugify';

@Entity()
export class News {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  title: string | undefined;

  @Column('text')
  description: string | undefined;

  @Column('text')
  content: string | undefined;

  @Column()
  image: string | undefined;

  @Column()
  alt: string | undefined;

  @Column()
  slug: string | undefined;

  @ManyToOne(() => UserProfile, (userProfile) => userProfile.news_added, {
    cascade: true,
  })
  added_by: number | undefined;

  @UpdateDateColumn()
  updated_at: Date | undefined;

  @CreateDateColumn()
  created_at: Date | undefined;

  @BeforeInsert()
  async slugify() {
    if (typeof this.title === "string") {
      this.slug = slugify(this.title, "_");
    }
    return this.slug;
  }
}
