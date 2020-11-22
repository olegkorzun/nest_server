import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
export declare type CourierDocument = Courier & Document;
export declare class Courier {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    vehicleType: string;
    user: User;
}
export declare const CourierSchema: import("mongoose").Schema<any>;
