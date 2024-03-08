import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategorieService } from './categorie.service';
import { CreateCategoriesDto } from './categories.dto';
import { PagesService } from 'src/pages/pages.service';

@Controller('categories')
export class CategorieController {
  constructor(
    private readonly categorieService: CategorieService,
    private readonly pagesService: PagesService,
  ) {}

  @Post()
  postCategories(@Body() categories: CreateCategoriesDto) {
    return this.categorieService.create(categories);
  }

  @Get()
  getCategories() {
    return this.categorieService.findAll();
  }

  @Get('pages/:id')
  getCategoryPages(@Param('id') id: string) {
    return this.pagesService.findCategoryPages(id);
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categorieService.find(id);
  }
}
