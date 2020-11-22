import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Courier, CourierDocument } from './schemas/courier.schema';
import { CreateCourierDto } from  './dto/create-courier.dto';

@Injectable()
export class CouriersService {
  constructor(@InjectModel(Courier.name) private courierModel: Model<CourierDocument>,) {}
  async create(createCourierDto: CreateCourierDto): Promise<Courier> {
    const createdCourier = new this.courierModel(createCourierDto);
    return createdCourier.save();
  }
  async findAll(): Promise<Courier[]> {
    return this.courierModel.find().exec();
  }
  async findOne(name): Promise<Courier> {
    return this.courierModel.findOne({ 'name': name }).exec();
  }
}
