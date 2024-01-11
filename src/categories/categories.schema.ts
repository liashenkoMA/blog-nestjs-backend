import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Categorie {
  @Prop({ unique: true })
  id: string;

  @Prop({ unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageurl: string;
}

export const CategorieSchema = SchemaFactory.createForClass(Categorie);
