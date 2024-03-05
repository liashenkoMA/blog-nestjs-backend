import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Tags } from 'src/tags/tags.schema';

@Schema()
export class Author {
  @Prop()
  author: string;

  @Prop()
  avatarLink: string;
}

@Schema()
export class Comments {
  @Prop()
  author: string;

  @Prop()
  textComment: string;

  @Prop()
  publickDate: string;
}

@Schema()
export class Pages {
  @Prop({ unique: true })
  url: string;

  @Prop()
  postImage: string;

  @Prop()
  metaTitle: string;

  @Prop()
  metaDescription: string;

  @Prop()
  header: string;

  @Prop()
  categories: string;

  @Prop()
  text: string;

  @Prop()
  author: [Author];

  @Prop()
  publickDate: string;

  @Prop()
  changekDate: string;

  @Prop()
  readTime: string;

  @Prop()
  comments: [Comments];

  @Prop()
  tags: [Tags];

  @Prop()
  popularPage: boolean;
}

export const PagesSchema = SchemaFactory.createForClass(Pages);
