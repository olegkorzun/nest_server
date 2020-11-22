import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type DeliveryDocument = Delivery & Document;

@Schema()
export class Delivery {
  @Prop()
  packageSize: number;
  @Prop()
  cost: number;
  @Prop()
  description: string;
  @Prop()
  date: Date;
  @Prop({ 
    type: Types.ObjectId, 
    ref: User.name 
  })
  sender: string;
  @Prop({ 
    type: Types.ObjectId, 
    ref: User.name 
  })
  courier: string;
}

export const DeliverySchema = SchemaFactory.createForClass(Delivery);
