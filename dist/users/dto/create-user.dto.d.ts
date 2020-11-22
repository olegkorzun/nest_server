export declare class CreateUserDto {
    user: {
        readonly name: string;
        readonly role: string;
        hash: string;
        salt: string;
    };
    courier: {
        readonly firstName: string;
        readonly lastName: string;
        readonly phoneNumber: string;
        readonly vehicleType: string;
        user: string;
    };
    sender: {
        readonly companyName: string;
        user: string;
    };
}
