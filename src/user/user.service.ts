import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  createUser(user) {
    const createUser = new this.userModel(user);
    return createUser.save();
  }

  getUser(id) {
    return this.userModel.find({ email: id }).exec();
  }
}
