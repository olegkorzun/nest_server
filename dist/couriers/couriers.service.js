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
exports.CouriersService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const courier_schema_1 = require("./schemas/courier.schema");
let CouriersService = class CouriersService {
    constructor(courierModel) {
        this.courierModel = courierModel;
    }
    async create(createCourierDto) {
        const createdCourier = new this.courierModel(createCourierDto);
        return createdCourier.save();
    }
    async findAll() {
        return this.courierModel.find().exec();
    }
    async findOne(name) {
        return this.courierModel.findOne({ 'name': name }).exec();
    }
};
CouriersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(courier_schema_1.Courier.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CouriersService);
exports.CouriersService = CouriersService;
//# sourceMappingURL=couriers.service.js.map