import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AgricultorsDocument = Agricultors & Document;

@Schema()
export class Agricultors {
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

export const AgricultorsSchema = SchemaFactory.createForClass(Agricultors);
