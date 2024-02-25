import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Categorie, CategorieSchema } from './categories.schema';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';
import { Pages, PagesSchema } from 'src/pages/pages.schema';
import { PagesModule } from 'src/pages/pages.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categorie.name, schema: CategorieSchema },
    ]),
    MongooseModule.forFeature([{ name: Pages.name, schema: PagesSchema }]),
    PagesModule,
  ],
  controllers: [CategorieController],
  providers: [CategorieService],
})
export class CategorieModule {}
