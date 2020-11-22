"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouriersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const couriers_service_1 = require("./couriers.service");
const courier_schema_1 = require("./schemas/courier.schema");
let CouriersModule = class CouriersModule {
};
CouriersModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: courier_schema_1.Courier.name, schema: courier_schema_1.CourierSchema }])],
        providers: [couriers_service_1.CouriersService],
        exports: [couriers_service_1.CouriersService],
    })
], CouriersModule);
exports.CouriersModule = CouriersModule;
//# sourceMappingURL=couriers.module.js.map