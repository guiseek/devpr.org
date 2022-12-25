import {IsString, MinLength} from 'class-validator'
import {ApiProperty} from '@nestjs/swagger'
import {User} from '@devpr.org/backend/api'

export class AuthRequestDto implements Pick<User, 'username' | 'password'> {
  @IsString()
  @ApiProperty({
    nullable: false,
  })
  username: string

  @IsString()
  @MinLength(8)
  @ApiProperty({
    nullable: false,
  })
  password: string
}
