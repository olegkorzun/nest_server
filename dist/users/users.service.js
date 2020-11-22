"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_schema_1 = require("./schemas/user.schema");
const crypto = require('crypto');
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async createUser(createUserDto) {
        let hash = createUserDto.user.hash;
        createUserDto.user.salt = crypto.randomBytes(16).toString('hex');
        createUserDto.user.hash = crypto.pbkdf2Sync(hash, createUserDto.user.salt, 10000, 512, 'sha512').toString('hex');
        const createdUser = new this.userModel(createUserDto.user);
        let usr = await createdUser.save();
        createUserDto.courier.user = usr._id;
        createUserDto.sender.user = usr._id;
        return usr;
    }
    async findAll() {
        return this.userModel.find().exec();
    }
    async findUser(name) {
        return this.userModel.findOne({ 'name': name }).exec();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map