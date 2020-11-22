import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
export declare type SenderDocument = Sender & Document;
export declare class Sender {
    companyName: string;
    user: User;
}
export declare const SenderSchema: import("mongoose").Schema<any>;
