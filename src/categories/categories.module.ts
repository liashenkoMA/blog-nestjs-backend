import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Categorie, CategorieSchema } from './categories.schema';
import { CategorieController } from './categorie.controller';
import { CategorieService } from './categorie.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Categorie.name, schema: CategorieSchema },
    ]),
  ],
  controllers: [CategorieController],
  providers: [CategorieService],
})
export class CategorieModule {}
