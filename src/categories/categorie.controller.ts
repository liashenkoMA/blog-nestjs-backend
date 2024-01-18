import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategoriesDto } from './categories.dto';

@Controller('categories')
export class CategorieController {
  constructor(private readonly categorieService: CategorieService) {}

  @Post()
  postCategories(@Body() categories: CreateCategoriesDto) {
    return this.categorieService.create(categories);
  }

  @Get()
  getCategories() {
    return this.categorieService.findAll();
  }

  @Get(':id')
  getCategorie(@Param('id') id: string) {
    return this.categorieService.find(id);
  }
}
