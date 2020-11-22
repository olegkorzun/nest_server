import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveriesService } from './deliveries.service';
import { Delivery, DeliverySchema } from './schemas/delivery.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Delivery.name, schema: DeliverySchema }])],
  providers: [DeliveriesService],
  exports: [DeliveriesService],
})
export class DeliveriesModule {}



