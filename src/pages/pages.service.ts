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
    return this.pagesModel
      .find({ categories: id })
      .sort({ $natural: -1 })
      .limit(6)
      .exec();
  }

  findFeatured(): Promise<Pages[]> {
    return this.pagesModel.find({ popularPage: true }).exec();
  }

  findTagPages(id): Promise<Pages[]> {
    return this.pagesModel
      .find({ tags: { $elemMatch: { url: id } } })
      .sort({ $natural: -1 })
      .limit(6)
      .exec();
  }

  getCountCategory(firstParam) {
    return this.pagesModel.find({ categories: firstParam }).countDocuments();
  }

  getCountCategoryPages(firstParam, endParams) {
    return this.pagesModel
      .find({ categories: firstParam })
      .skip(endParams * 6 - 6)
      .sort({ $natural: -1 })
      .limit(6)
      .exec();
  }

  getCountTag(id) {
    return this.pagesModel
      .find({ tags: { $elemMatch: { url: id } } })
      .countDocuments();
  }

  getCountTagPages(firstParam, endParams) {
    return this.pagesModel
      .find({ tags: { $elemMatch: { url: firstParam } } })
      .skip(endParams * 6 - 6)
      .sort({ $natural: -1 })
      .limit(6)
      .exec();
  }
}
