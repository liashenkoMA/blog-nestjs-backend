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

  @Get('pages/count/:id')
  getCategoryCountPages(@Param() param) {
    const x = param.id.split('&');
    const firstParam = x[0].slice(3);
    const endParams = x[1].slice(7);
    return this.pagesService.getCountCategoryPages(firstParam, endParams);
  }

  @Get(':id')
  getCategory(@Param('id') id: string) {
    return this.categorieService.find(id);
  }

  @Get('count/:id')
  getCount(@Param('id') id: string) {
    return this.pagesService.getCountCategory(id);
  }
}
