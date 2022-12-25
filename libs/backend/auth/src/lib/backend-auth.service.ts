import {Injectable} from '@nestjs/common'
import {JwtService} from '@nestjs/jwt'
import {validatePassword} from './utilities/validate-password'
import {createPassword} from './utilities/create-password'
import {AuthRequestDto} from './dto/auth-request.dto'
import {UserResponseDto} from './dto/user-response.dto'
import {CheckUserDto} from './dto/check-user.dto'
import {CreateUserDto, User, BackendUserService} from '@devpr.org/backend/api'
import {AuthResponseDto} from './dto/auth-response.dto'

@Injectable()
export class BackendAuthService {
  constructor(
    private userService: BackendUserService,
    private jwtService: JwtService
  ) {}

  async validateUser({username, password}: AuthRequestDto) {
    const user = await this.userService.findOne(username)
    if (user && validatePassword(password, user.password)) {
      return user
    }
    return null
  }

  async checkUser(user: CheckUserDto) {
    return this.userService.findOne(user.username)
  }

  async createUser(user: CreateUserDto) {
    const {password, salt} = createPassword(user.password)
    return new UserResponseDto(
      await this.userService.createOne({
        ...user,
        password,
        salt,
      })
    )
  }

  async login(user: User) {
    const payload = {username: user.username, sub: user.id}
    return new AuthResponseDto(this.jwtService.sign(payload))
  }
}
