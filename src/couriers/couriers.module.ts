import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CouriersService } from './couriers.service';
import { Courier, CourierSchema } from './schemas/courier.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Courier.name, schema: CourierSchema }])],
  providers: [CouriersService],
  exports: [CouriersService],
})
export class CouriersModule {}
