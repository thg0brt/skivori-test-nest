import { Controller, Request, Post, UnauthorizedException, HttpCode} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //Login route
  @HttpCode(200)
  @Post('login')
  async login(@Request() req) {
    const email = req.body.email ?? '';
    const password = req.body.hashedPassword  ?? '';
    //validate if the credentials exist in the database
    const user = await this.authService.validateUser(email, password);

    //If the credentials is incorrect, return the 401 status code.
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

}