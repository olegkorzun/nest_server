import { Controller, Get, Request, Post, UseGuards, Body, UsePipes, ValidationPipe, Param, BadRequestException } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { User } from './users/schemas/user.schema';
import { CouriersService } from './couriers/couriers.service';
import { SenderService } from './sender/sender.service';
import { DeliveriesService } from './deliveries/deliveries.service';
import { CreateDeliveryDto } from './deliveries/dto/create-delivery.dto';
import { RolesGuard } from './roles/roles.guard';
import { Roles } from './roles/roles.decorator';
import { CourierRevenueDto } from './deliveries/dto/courier-revenue.dto';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService,
    private readonly usersService: UsersService,
    private readonly courierService: CouriersService,
    private readonly senderService: SenderService,
    private readonly deliveriesService: DeliveriesService,
  ) {}

  @Roles('sender') 
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Post('newdelivery')
  async createDelivery(@Request() req,  @Body() createDeliveryDto: CreateDeliveryDto) {
    createDeliveryDto.sender = req.user.userid;
    return this.deliveriesService.create(createDeliveryDto);
  }

  @Roles('sender') 
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Post('asigndelivery')
  async asignDelivery(@Body() asignDelivery: {deliveryId:string,courierId:string}) {
    return this.deliveriesService.asignDelivery(asignDelivery);
  }

  @UseGuards(JwtAuthGuard)
  @Get('getdeliveries/:date')
  async getDeliveries(@Request() req , @Param('id') date: Date  ) {
    if (req.user.role === 'sender') return this.deliveriesService.getDeliveriesSender(date, req.user.userid);
    else if (req.user.role === 'courier') return this.deliveriesService.getDeliveriesCourier(date, req.user.userid);
    throw new BadRequestException('Bad role');
  }

  @Roles('courier') 
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Post('courierrevenue')
  async courierRevenue(@Body() courierRevenueDto: CourierRevenueDto) {
    return this.deliveriesService.courierRevenue(courierRevenueDto);
  }

  @Roles('sender') 
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Post('newuser')
  async createUser(@Body() createUserDto: CreateUserDto) {
    let usr = await this.usersService.createUser(createUserDto);
    if (createUserDto.user.role === 'courier') 
      await this.courierService.create(createUserDto.courier);
    else if (createUserDto.user.role === 'sender')
      await this.senderService.create(createUserDto.sender);
    return {user:usr.name};
  }

  @Roles('sender') 
  @UseGuards(JwtAuthGuard,RolesGuard)
  @Get('userslist')
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

}