import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FarmersDocument = Farmers & Document;

@Schema()
export class Farmers {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  cpf: string;

  @Prop()
  birthDate: Date;

  @Prop()
  phone: string;

  @Prop({ default: true })
  active: boolean;
}

export const FarmersSchema = SchemaFactory.createForClass(Farmers);
