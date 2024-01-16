import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Tags {
  @Prop()
  title: string;

  @Prop()
  imageLink: string;
}

export const TagSchema = SchemaFactory.createForClass(Tags);
