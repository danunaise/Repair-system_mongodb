import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class Auth {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'user' })
  role: string;

  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  department: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
