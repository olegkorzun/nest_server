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
exports.CreateDeliveryDto = void 0;
const class_validator_1 = require("class-validator");
const is_today_validator_1 = require("../../validators/is-today.validator");
const more_then_validator_1 = require("../../validators/more-then.validator");
class CreateDeliveryDto {
}
__decorate([
    class_validator_1.IsNumberString(),
    more_then_validator_1.MoreThen('1'),
    __metadata("design:type", Number)
], CreateDeliveryDto.prototype, "packageSize", void 0);
__decorate([
    class_validator_1.IsNumberString(),
    __metadata("design:type", Number)
], CreateDeliveryDto.prototype, "cost", void 0);
__decorate([
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateDeliveryDto.prototype, "description", void 0);
__decorate([
    is_today_validator_1.IsToday(),
    __metadata("design:type", Date)
], CreateDeliveryDto.prototype, "date", void 0);
exports.CreateDeliveryDto = CreateDeliveryDto;
//# sourceMappingURL=create-delivery.dto.js.map