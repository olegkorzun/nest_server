

import { Model } from 'mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Delivery, DeliveryDocument } from './schemas/delivery.schema';
import { CreateDeliveryDto } from  './dto/create-delivery.dto';
import { CourierRevenueDto } from './dto/courier-revenue.dto';

@Injectable()
export class DeliveriesService {

  constructor(
    @InjectModel(Delivery.name) private deliveryModel: Model<DeliveryDocument>,
  ) {}
  
  async create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    const createdDelivery = new this.deliveryModel(createDeliveryDto);
    return createdDelivery.save();
  }

  async asignDelivery(asignDelivery: {deliveryId:string,courierId:string} ): Promise<Delivery> {
    let delivery:Delivery = await this.deliveryModel.findOne({ '_id': asignDelivery.deliveryId }).exec();
    let deliveries: Delivery[] = await this.deliveryModel.find({ 'date': delivery.date,'courier' : asignDelivery.courierId}).exec();
    if (deliveries.length<5) return this.deliveryModel.updateOne({ '_id': asignDelivery.deliveryId }, {'courier' : asignDelivery.courierId}).exec();
    else throw new BadRequestException('More then 5 deliveries per courier');
  }

  async getDeliveriesSender(deliveryDate: Date, senderId: string ): Promise<Delivery[]> {
    return this.deliveryModel.find({ 'date': deliveryDate,'sender' : senderId}).exec();
  }
  async getDeliveriesCourier(deliveryDate: Date, courierId: string ): Promise<Delivery[]> {
    let dd = new Date(deliveryDate)
    return this.deliveryModel.find({ 'date': dd,'courier' : courierId}).exec();
  }

  async courierRevenue(courierRevenueDto: CourierRevenueDto ): Promise<number> {
    let first = new Date(courierRevenueDto.start);
    let last = new Date(courierRevenueDto.end);
    let revenue: Delivery[] = await this.deliveryModel.find({EndDate: {$gte: first, $lt: last}}).exec();
    let sum: number = revenue.map(a => a.cost).reduce(function(a, b)
    {
      return a + b;
    });
    return sum;
  }
}

