import {
  Controller,
  Post,
  Get,
  Body,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthRequest } from './interfaces/auth-request.interface';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { BackendAuthService } from './backend-auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { CheckUserDto } from './dto/check-user.dto';

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
  signIn(@Request() req: AuthRequest) {
    return this.backendAuthService.login(req.user);
  }

  @Public()
  @Post('check')
  async checkUsername(@Body() { username }: CheckUserDto) {
    const user = await this.backendAuthService.checkUser({ username });
    if (user) return { message: 'Username already exists' };
    return;
  }

  @Public()
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return this.backendAuthService.createUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: AuthRequest) {
    return req.user;
  }
}
