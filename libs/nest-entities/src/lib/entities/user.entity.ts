import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { UserSetting } from './user-setting.entity';
import { Role } from './enums/roles.enum';
import { v4 as uuidv4 } from 'uuid';

@Entity()
/**
 * @class User
 * @description
 * User entity
 */
export class User {
  @PrimaryGeneratedColumn()
  id: number | undefined;

  @Column()
  uuid: string | undefined;

  @Column({ nullable: true })
  user_name: string | undefined;

  @Column()
  email: string | undefined;

  @Column()
  password: string | undefined;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role | undefined;

  @Column({ nullable: true })
  profile_id: number | undefined;

  @OneToOne(() => UserProfile, { cascade: true, eager: true })
  @JoinColumn({ name: 'profile_id', referencedColumnName: 'id' })
  profile: UserProfile | undefined;

  @Column({ nullable: true })
  settings_id: number | undefined;

  @OneToOne(() => UserSetting, { cascade: true, eager: true })
  @JoinColumn({ name: 'settings_id', referencedColumnName: 'id' })
  settings: UserSetting | undefined;

  @UpdateDateColumn()
  updatedAt: Date | undefined;

  @CreateDateColumn()
  createdAt: Date | undefined;

  @BeforeInsert()
  generateUUID() {
    this.uuid = uuidv4();
  }
}
