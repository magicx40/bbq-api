import {
  Body,
  Controller,
  Post,
  Req,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() loginDto: { username: string; password: string }) {
    const user = await this.authService.validateUser(
      loginDto.username,
      loginDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('登录用户不存在');
    }
    return this.authService.login(user);
  }

  @Public()
  @Post('logout')
  async logout(@Req() req) {
    const auth = req.headers?.authorization?.split(' ')?.[1];
    if (!auth) {
      throw new UnauthorizedException('未登录');
    }
    const user = await this.authService.getUserByToken(auth);
    return this.authService.logout(user.username);
  }
}
