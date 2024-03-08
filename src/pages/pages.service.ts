import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Pages } from './pages.schema';

@Injectable()
export class PagesService {
  constructor(@InjectModel(Pages.name) private pagesModel: Model<Pages>) {}

  create(page): Promise<Pages> {
    const createPage = new this.pagesModel(page);
    return createPage.save();
  }

  findPage(id): Promise<Pages> {
    return this.pagesModel.findOne({ url: id }).exec();
  }

  findCategoryPages(id): Promise<Pages[]> {
    return this.pagesModel.find({ categories: id }).exec();
  }

  findFeatured(): Promise<Pages[]> {
    return this.pagesModel.find({ popularPage: true }).exec();
  }

  findTagPages(id): Promise<Pages[]> {
    return this.pagesModel.find({ tags: { $elemMatch: { url: id } } }).exec();
  }
}
