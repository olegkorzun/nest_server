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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourierSchema = exports.Courier = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schema_1 = require("../../users/schemas/user.schema");
let Courier = class Courier {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Courier.prototype, "firstName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Courier.prototype, "lastName", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Courier.prototype, "phoneNumber", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Courier.prototype, "vehicleType", void 0);
__decorate([
    mongoose_1.Prop({ type: mongoose_2.Types.ObjectId, ref: user_schema_1.User.name }),
    __metadata("design:type", user_schema_1.User)
], Courier.prototype, "user", void 0);
Courier = __decorate([
    mongoose_1.Schema()
], Courier);
exports.Courier = Courier;
exports.CourierSchema = mongoose_1.SchemaFactory.createForClass(Courier);
//# sourceMappingURL=courier.schema.js.map