import { Exclude } from 'class-transformer';
import { User } from '../interfaces/user.interface';

export class UserResponseDto implements User {
  id: number;
  username: string;

  @Exclude()
  password: string;

  @Exclude()
  salt: string;

  constructor({ id, username }: Pick<UserResponseDto, 'id' | 'username'>) {
    this.id = id;
    this.username = username;
  }
}
