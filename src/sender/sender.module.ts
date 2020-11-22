import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SenderService } from './sender.service';
import { Sender, SenderSchema } from './schemas/sender.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Sender.name, schema: SenderSchema }])],
  providers: [SenderService],
  exports: [SenderService],
})
export class SenderModule {}


