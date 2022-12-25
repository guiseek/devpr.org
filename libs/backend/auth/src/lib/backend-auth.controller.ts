import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  Options,
  UseGuards,
  ConflictException,
} from '@nestjs/common';
import { AuthRequest } from './interfaces/auth-request.interface';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { BackendAuthService } from './backend-auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';
import { CheckUserDto } from './dto/check-user.dto';
import { CreateUserDto } from '@devpr.org/backend/user';
import {
  ApiBasicAuth,
  ApiBearerAuth,
  ApiConflictResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserResponseDto } from './dto/user-response.dto';
import { AuthResponseDto } from './dto/auth-response.dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('auth')
export class BackendAuthController {
  constructor(private readonly backendAuthService: BackendAuthService) {}

  /**
   * Now we must provide a mechanism
   * for declaring routes as public.
   */
  @Public()
  @Post('login')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({ summary: 'Sign in' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({
    status: 200,
    description: 'The access token',
    type: AuthResponseDto,
  })
  @ApiBasicAuth()
  signIn(@Request() req: AuthRequest) {
    return this.backendAuthService.login(req.user);
  }

  @Public()
  @ApiOperation({ summary: 'Check user availability' })
  @Options('check')
  async checkUsername(@Body() { username }: CheckUserDto) {
    const user = await this.backendAuthService.checkUser({ username });
    if (user) {
      throw new ConflictException('Username already exists');
    }
    return;
  }

  @Public()
  @Post('register')
  @ApiOperation({ summary: 'Sign up' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({
    status: 200,
    description: 'The auth user record',
    type: UserResponseDto,
  })
  async register(@Body() user: CreateUserDto) {
    return this.backendAuthService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiOperation({ summary: 'Authenticated user' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiResponse({
    status: 200,
    description: 'The auth user record',
    type: UserResponseDto,
  })
  getProfile(@Request() req: AuthRequest) {
    return req.user;
  }
}
