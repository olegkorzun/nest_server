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
exports.DeliveriesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const delivery_schema_1 = require("./schemas/delivery.schema");
let DeliveriesService = class DeliveriesService {
    constructor(deliveryModel) {
        this.deliveryModel = deliveryModel;
    }
    async create(createDeliveryDto) {
        const createdDelivery = new this.deliveryModel(createDeliveryDto);
        return createdDelivery.save();
    }
    async asignDelivery(asignDelivery) {
        let delivery = await this.deliveryModel.findOne({ '_id': asignDelivery.deliveryId }).exec();
        let deliveries = await this.deliveryModel.find({ 'date': delivery.date, 'courier': asignDelivery.courierId }).exec();
        if (deliveries.length < 5)
            return this.deliveryModel.updateOne({ '_id': asignDelivery.deliveryId }, { 'courier': asignDelivery.courierId }).exec();
        else
            throw new common_1.BadRequestException('More then 5 deliveries per courier');
    }
    async getDeliveriesSender(deliveryDate, senderId) {
        return this.deliveryModel.find({ 'date': deliveryDate, 'sender': senderId }).exec();
    }
    async getDeliveriesCourier(deliveryDate, courierId) {
        return this.deliveryModel.find({ 'date': deliveryDate, 'courier': courierId }).exec();
    }
};
DeliveriesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel(delivery_schema_1.Delivery.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], DeliveriesService);
exports.DeliveriesService = DeliveriesService;
//# sourceMappingURL=deliveries.service.js.map