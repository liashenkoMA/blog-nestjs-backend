import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authServise: AuthService) {}

  @Post('signin')
  signIn(@Body() user) {
    const { email, password } = user;
    return this.authServise.signIn(email, password);
  }
}
