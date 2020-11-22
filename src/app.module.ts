import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CouriersModule } from './couriers/couriers.module';
import { SenderModule } from './sender/sender.module';
import { DeliveriesModule } from './deliveries/deliveries.module';

@Module({
  imports: [
    AuthModule, 
    UsersModule,
    MongooseModule.forRoot('mongodb://localhost/getpackage'),
    CouriersModule,
    SenderModule,
    DeliveriesModule,
  ],
  controllers: [AppController],
})
export class AppModule {
  
}
