import { Model } from 'mongoose';
import { Delivery, DeliveryDocument } from './schemas/delivery.schema';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
export declare class DeliveriesService {
    private deliveryModel;
    constructor(deliveryModel: Model<DeliveryDocument>);
    create(createDeliveryDto: CreateDeliveryDto): Promise<Delivery>;
    asignDelivery(asignDelivery: {
        deliveryId: string;
        courierId: string;
    }): Promise<Delivery>;
    getDeliveriesSender(deliveryDate: Date, senderId: string): Promise<Delivery[]>;
    getDeliveriesCourier(deliveryDate: Date, courierId: string): Promise<Delivery[]>;
}
