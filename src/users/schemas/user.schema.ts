import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({
    required: true,
    index: true,
    unique: true
  })
  name: string;
  @Prop({
    default: 'courier',
    enum: ['courier', 'sender']
  })
  role: string;
  @Prop()
  hash: string;
  @Prop()
  salt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
