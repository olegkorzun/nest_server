import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
const crypto = require('crypto');

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    let hash = createUserDto.user.hash;
    createUserDto.user.salt  = crypto.randomBytes(16).toString('hex');
    createUserDto.user.hash = crypto.pbkdf2Sync(hash , createUserDto.user.salt, 10000, 512, 'sha512').toString('hex');
    const createdUser = new this.userModel(createUserDto.user);
    let usr = await createdUser.save();
    createUserDto.courier.user = usr._id;
    createUserDto.sender.user = usr._id;
    return usr;
  }
  
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async findUser(name): Promise<User> {
    return this.userModel.findOne({ 'name': name }).exec();
  }
}