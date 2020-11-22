import { Model } from 'mongoose';
import { Sender, SenderDocument } from './schemas/sender.schema';
import { CreateSenderDto } from './dto/create-sender.dto';
export declare class SenderService {
    private senderModel;
    constructor(senderModel: Model<SenderDocument>);
    create(createSenderDto: CreateSenderDto): Promise<Sender>;
    findAll(): Promise<Sender[]>;
    findOne(companyName: any): Promise<Sender>;
}
