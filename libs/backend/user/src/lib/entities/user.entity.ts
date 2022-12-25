import {entityContainer} from '@devpr.org/backend/util'
import {Role} from '@devpr.org/backend/api'
import {
  Column,
  Entity,
  Unique,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    nullable: false,
  })
  username: string

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  password: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  salt: string

  @Column({
    type: 'varchar',
    nullable: false,
  })
  email: string

  @Column({
    type: 'varchar',
    nullable: false,
    default: '',
  })
  name: string

  @Column({
    type: 'varchar',
    default: '',
  })
  photoUrl: string

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role: Role

  @Column({
    type: 'boolean',
    default: true,
  })
  status: boolean

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    nullable: false,
  })
  createdAt: Date

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP()',
    onUpdate: 'CURRENT_TIMESTAMP()',
    nullable: false,
  })
  updatedAt: Date
}

entityContainer.add(User)
