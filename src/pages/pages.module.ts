import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { Pages, PagesSchema } from './pages.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pages.name, schema: PagesSchema }]),
  ],
  controllers: [PagesController],
  providers: [PagesService],
  exports: [PagesService],
})
export class PagesModule {}
