import { Model } from 'mongoose';
import { Courier, CourierDocument } from './schemas/courier.schema';
import { CreateCourierDto } from './dto/create-courier.dto';
export declare class CouriersService {
    private courierModel;
    constructor(courierModel: Model<CourierDocument>);
    create(createCourierDto: CreateCourierDto): Promise<Courier>;
    findAll(): Promise<Courier[]>;
    findOne(name: any): Promise<Courier>;
}
