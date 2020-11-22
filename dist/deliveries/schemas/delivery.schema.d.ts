import { Document } from 'mongoose';
export declare type DeliveryDocument = Delivery & Document;
export declare class Delivery {
    packageSize: number;
    cost: number;
    description: string;
    date: Date;
    sender: string;
    courier: string;
}
export declare const DeliverySchema: import("mongoose").Schema<any>;
