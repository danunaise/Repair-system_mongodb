import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
@Schema({ timestamps: true })
export class Report {
  @Prop({ required: true })
  roomId: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  department: string;

  @Prop({ default: 'pending' })
  status: string;

  @Prop({ default: '-' })
  fixedBy: string;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const ReportSchema = SchemaFactory.createForClass(Report);
