import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Tags } from './tags.schema';
import { CreateTagsDto } from './tags.schema.dto';

@Injectable()
export class TagsService {
  constructor(@InjectModel(Tags.name) private tagsModel: Model<Tags>) {}

  create(tag: CreateTagsDto): Promise<Tags> {
    const createTag = new this.tagsModel(tag);
    return createTag.save();
  }

  findAll(): Promise<Tags[]> {
    return this.tagsModel.find().exec();
  }
}
