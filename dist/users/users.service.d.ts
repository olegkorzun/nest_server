import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findUser(name: any): Promise<User>;
}
