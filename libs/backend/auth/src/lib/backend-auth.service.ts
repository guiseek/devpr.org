import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './interfaces/user.interface';
import { validatePassword } from './utilities/validate-password';
import { createPassword } from './utilities/create-password';
import { AuthRequestDto } from './dto/auth-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { CheckUserDto } from './dto/check-user.dto';
import { UserService } from '@devpr.org/backend/user';

@Injectable()
export class BackendAuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async validateUser({ username, password }: AuthRequestDto) {
    const user = await this.userService.findOne(username);

    if (user && validatePassword(password, user.password, user.salt)) {
      return user;
    }
    return null;
  }

  async checkUser(user: CheckUserDto) {
    return this.userService.findOne(user.username);
  }

  async createUser(user: CreateUserDto) {
    const { password, salt } = createPassword(user.password);
    return new UserResponseDto(
      await this.userService.createOne({
        ...user,
        password,
        salt,
      })
    );
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    const access_token = this.jwtService.sign(payload);
    return { access_token };
  }
}
