import { AuthService } from './auth/auth.service';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { User } from './users/schemas/user.schema';
import { CouriersService } from './couriers/couriers.service';
import { SenderService } from './sender/sender.service';
import { DeliveriesService } from './deliveries/deliveries.service';
import { CreateDeliveryDto } from './deliveries/dto/create-delivery.dto';
export declare class AppController {
    private authService;
    private readonly usersService;
    private readonly courierService;
    private readonly senderService;
    private readonly deliveriesService;
    constructor(authService: AuthService, usersService: UsersService, courierService: CouriersService, senderService: SenderService, deliveriesService: DeliveriesService);
    createDelivery(req: any, createDeliveryDto: CreateDeliveryDto): Promise<import("./deliveries/schemas/delivery.schema").Delivery>;
    asignDelivery(asignDelivery: {
        deliveryId: string;
        courierId: string;
    }): Promise<import("./deliveries/schemas/delivery.schema").Delivery>;
    getDeliveries(req: any, date: Date): Promise<import("./deliveries/schemas/delivery.schema").Delivery[]>;
    createUser(createUserDto: CreateUserDto): Promise<{
        user: string;
    }>;
    findAll(): Promise<User[]>;
    login(req: any): Promise<{
        access_token: string;
    }>;
}
