import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Author {
  @Prop()
  author: string;

  @Prop()
  avatarLink: string;
}

@Schema()
export class Pages {
  @Prop({ unique: true })
  url: string;

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
  readTime: string;
}

export const PagesSchema = SchemaFactory.createForClass(Pages);
