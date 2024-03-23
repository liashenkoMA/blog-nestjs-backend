import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop({ unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  avatarLink: string;

  @Prop()
  admin: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
