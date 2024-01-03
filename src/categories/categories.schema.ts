import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Categorie {
  @Prop({ unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ unique: true })
  imageurl: string;
}

export const CategorieSchema = SchemaFactory.createForClass(Categorie);
