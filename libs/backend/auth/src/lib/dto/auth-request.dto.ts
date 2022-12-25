import { User } from '../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class AuthRequestDto implements Omit<User, 'id' | 'salt'> {
  @IsString()
  @ApiProperty({
    nullable: false
  })
  username: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    nullable: false
  })
  password: string;
}
