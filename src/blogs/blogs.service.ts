import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Pages } from 'src/pages/pages.schema';

@Injectable()
export class BlogsService {
  constructor(@InjectModel(Pages.name) private pagesModel: Model<Pages>) {}

  findAll(): Promise<Pages[]> {
    return this.pagesModel.find().exec();
  }
}
