import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Sender, SenderDocument } from './schemas/sender.schema';
import { CreateSenderDto } from  './dto/create-sender.dto';

@Injectable()
export class SenderService {
  constructor(@InjectModel(Sender.name) private senderModel: Model<SenderDocument>,) {}
  async create(createSenderDto: CreateSenderDto): Promise<Sender> {
    const createdCourier = new this.senderModel(createSenderDto);
    return createdCourier.save();
  }
  async findAll(): Promise<Sender[]> {
    return this.senderModel.find().exec();
  }
  async findOne(companyName): Promise<Sender> {
    console.log(companyName)
    return this.senderModel.findOne({ 'companyName': companyName }).exec();
  }
}
