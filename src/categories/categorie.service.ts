import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Categorie } from './categories.schema';
import { CreateCategoriesDto } from './categories.dto';

@Injectable()
export class CategorieService {
  constructor(
    @InjectModel(Categorie.name) private categorieModel: Model<Categorie>,
  ) {}

  create(categorie: CreateCategoriesDto): Promise<Categorie> {
    const createCategories = new this.categorieModel(categorie);
    return createCategories.save();
  }

  findAll(): Promise<Categorie[]> {
    return this.categorieModel.find().exec();
  }

  find(id): Promise<Categorie> {
    return this.categorieModel.findOne({ url: id }).exec();
  }


}
