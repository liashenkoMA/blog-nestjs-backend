import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email: email }).exec();

    if (!user) {
      throw new UnauthorizedException('Пользователя не существует');
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      throw new UnauthorizedException('Почта или пароль не верные');
    }

    const payload = { sub: user._id, useremail: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
      name: user.name,
      avatarLink: user.avatarLink,
      admin: user.admin,
    };
  }
}
