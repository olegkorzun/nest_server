import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document , Types } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

export type CourierDocument = Courier & Document;

@Schema()
export class Courier {
  @Prop()
  firstName: string;
  @Prop()
  lastName: string;
  @Prop({
    required: true,
    index: true,
    unique: true
  })
  phoneNumber: string;
  @Prop()
  vehicleType: string;
  @Prop({ 
    type: Types.ObjectId, 
    ref: User.name 
  })
  user: User;
}

export const CourierSchema = SchemaFactory.createForClass(Courier);
