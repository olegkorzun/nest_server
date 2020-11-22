import { Document } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    name: string;
    role: string;
    hash: string;
    salt: string;
}
export declare const UserSchema: import("mongoose").Schema<any>;
