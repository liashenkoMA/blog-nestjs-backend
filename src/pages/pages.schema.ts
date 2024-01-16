import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tags {
  @Prop()
  title: string;

  @Prop()
  imageLink: string;
}

@Schema()
export class Comments {
  @Prop()
  author: string;

  @Prop()
  publickDate: Date;

  @Prop()
  text: string;
}

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
  tags: [Tags];

  @Prop()
  comments: [Comments];

  @Prop()
  author: [Author];

  @Prop()
  publickDate: Date;

  @Prop()
  changeDate: Date;

  @Prop()
  readTime: number;
}

export const PagesSchema = SchemaFactory.createForClass(Pages);
