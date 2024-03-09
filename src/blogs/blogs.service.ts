import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pages } from 'src/pages/pages.schema';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Pages.name) private pagesModel: Model<Pages>) {}

  findAll(): Promise<Pages[]> {
    return this.pagesModel.find().sort({ $natural: -1 }).limit(6).exec();
  }

  findLimitPage(id): Promise<Pages[]> {
    return this.pagesModel
      .find()
      .sort({ $natural: -1 })
      .skip(id * 6 - 6)
      .limit(6)
      .exec();
  }

  getCount() {
    return this.pagesModel.countDocuments();
  }
}
