import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategorieModule } from './categories/categories.module';
import { PagesModule } from './pages/pages.module';
import { TagsModule } from './tags/tags.module';
import { BlogsModule } from './blogs/blogs.module';
import { FileModule } from './file/file.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/'),
    CategorieModule,
    PagesModule,
    TagsModule,
    BlogsModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
