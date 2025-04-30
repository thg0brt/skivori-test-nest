import { Controller, Request, Post, UnauthorizedException, HttpCode} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('login')
  async login(@Request() req) {
    const email = req.body.email ?? '';
    const password = req.body.hashedPassword  ?? '';
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

}