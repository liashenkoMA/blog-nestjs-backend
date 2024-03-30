import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(user) {
    const oldUser = await this.userModel.findOne({ email: user.email }).exec();

    if (oldUser) {
      throw new ConflictException('Почта уже используется');
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);

    const createUser = new this.userModel({
      email: user.email,
      password: password,
      name: user.name,
      avatarLink: user.avatarLink,
      admin: user.admin,
    });

    return createUser.save();
  }

  getUser(id) {
    return this.userModel.find({ email: id }).exec();
  }

  async findOne(email) {
    return this.userModel.findOne({ email: email }).exec();
  }
}
