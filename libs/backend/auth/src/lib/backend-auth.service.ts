import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from './interfaces/user.interface';
import { UserRepository } from './repositories/user.repository';
import { validatePassword } from './utilities/validate-password';
import { createPassword } from './utilities/create-password';
import { AuthRequestDto } from './dto/auth-request.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UserResponseDto } from './dto/user-response.dto';
import { CheckUserDto } from './dto/check-user.dto';

@Injectable()
export class BackendAuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async validateUser({ username, password }: AuthRequestDto) {
    const user = await this.userRepository.findOne(username);

    if (user && validatePassword(password, user.password, user.salt)) {
      return user;
    }
    return null;
  }

  async checkUser(user: CheckUserDto) {
    return this.userRepository.findOne(user.username);
  }

  async createUser(user: CreateUserDto) {
    const { password, salt } = createPassword(user.password);
    return new UserResponseDto(
      await this.userRepository.createOne({
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
