import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class Auth {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'user' })
  role: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
