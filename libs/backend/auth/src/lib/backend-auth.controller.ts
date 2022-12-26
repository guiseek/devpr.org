import {
  Post,
  Get,
  Body,
  Request,
  UseGuards,
  Controller,
  ConflictException,
  NotFoundException,
} from '@nestjs/common'
import {
  ApiTags,
  ApiBody,
  ApiBasicAuth,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger'
import {CreateUserDto} from '@devpr.org/backend/api'
import {AuthRequest} from './interfaces/auth-request.interface'
import {BackendAuthService} from './backend-auth.service'
import {JwtAuthGuard} from './guards/jwt-auth.guard'
import {LocalAuthGuard} from './guards/local-auth.guard'
import {UserResponseDto} from './dto/user-response.dto'
import {AuthResponseDto} from './dto/auth-response.dto'
import {AuthRequestDto} from './dto/auth-request.dto'
import {CheckUserDto} from './dto/check-user.dto'
import {Public} from './decorators/public.decorator'

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class BackendAuthController {
  constructor(private readonly backendAuthService: BackendAuthService) {}

  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiBasicAuth()
  @ApiOperation({summary: 'Sign in'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiResponse({
    status: 200,
    description: 'The access token',
    type: AuthResponseDto,
  })
  @ApiBody({type: AuthRequestDto})
  signIn(@Request() req: AuthRequest) {
    return this.backendAuthService.login(req.user)
  }

  @Public()
  @Post('check')
  @ApiOperation({summary: 'Check user availability'})
  async checkUsername(@Body() {username}: CheckUserDto) {
    const user = await this.backendAuthService.checkUser({username})
    return user ? {message: 'Username already exists'} : ''
  }

  @Public()
  @Post('register')
  @ApiOperation({summary: 'Sign up'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiResponse({
    status: 200,
    description: 'The auth user record',
    type: UserResponseDto,
  })
  async register(@Body() user: CreateUserDto) {
    return this.backendAuthService.createUser(user)
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({summary: 'Authenticated user'})
  @ApiResponse({status: 401, description: 'Unauthorized.'})
  @ApiResponse({
    status: 200,
    description: 'The auth user record',
    type: UserResponseDto,
  })
  getProfile(@Request() req: AuthRequest) {
    return req.user
  }
}
