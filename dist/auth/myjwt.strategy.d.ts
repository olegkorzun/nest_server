import { Strategy } from 'passport-jwt';
declare const MyJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class MyJwtStrategy extends MyJwtStrategy_base {
    constructor();
    validate(payload: any): Promise<false | {
        userid: any;
        role: any;
        username: any;
    }>;
}
export {};
