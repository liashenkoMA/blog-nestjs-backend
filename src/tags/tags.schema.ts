import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tags {
  @Prop({ unique: true })
  url: string;

  @Prop()
  metaTitle: string;

  @Prop()
  metaDescription: string;
  
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;
}

export const TagSchema = SchemaFactory.createForClass(Tags);
