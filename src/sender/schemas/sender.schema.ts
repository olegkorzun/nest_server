import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type SenderDocument = Sender & Document;

@Schema()
export class Sender {
  @Prop({
    required: true,
    index: true,
    unique: true
  })
  companyName: string;
  @Prop({ 
    type: Types.ObjectId, 
    ref: User.name 
  })
  user: User;
}

export const SenderSchema = SchemaFactory.createForClass(Sender);
