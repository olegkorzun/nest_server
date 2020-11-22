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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const local_auth_guard_1 = require("./auth/local-auth.guard");
const auth_service_1 = require("./auth/auth.service");
const users_service_1 = require("./users/users.service");
const create_user_dto_1 = require("./users/dto/create-user.dto");
const couriers_service_1 = require("./couriers/couriers.service");
const sender_service_1 = require("./sender/sender.service");
const deliveries_service_1 = require("./deliveries/deliveries.service");
const create_delivery_dto_1 = require("./deliveries/dto/create-delivery.dto");
const roles_guard_1 = require("./roles/roles.guard");
const roles_decorator_1 = require("./roles/roles.decorator");
let AppController = class AppController {
    constructor(authService, usersService, courierService, senderService, deliveriesService) {
        this.authService = authService;
        this.usersService = usersService;
        this.courierService = courierService;
        this.senderService = senderService;
        this.deliveriesService = deliveriesService;
    }
    async createDelivery(req, createDeliveryDto) {
        createDeliveryDto.sender = req.user.userid;
        return this.deliveriesService.create(createDeliveryDto);
    }
    async asignDelivery(asignDelivery) {
        return this.deliveriesService.asignDelivery(asignDelivery);
    }
    async getDeliveries(req, date) {
        if (req.user.role === 'sender')
            return this.deliveriesService.getDeliveriesSender(date, req.user.userid);
        else if (req.user.role === 'courier')
            return this.deliveriesService.getDeliveriesCourier(date, req.user.userid);
        throw new common_1.BadRequestException('Bad role');
    }
    async createUser(createUserDto) {
        let usr = await this.usersService.createUser(createUserDto);
        if (createUserDto.user.role === 'courier')
            await this.courierService.create(createUserDto.courier);
        else if (createUserDto.user.role === 'sender')
            await this.senderService.create(createUserDto.sender);
        return { user: usr.name };
    }
    async findAll() {
        return this.usersService.findAll();
    }
    async login(req) {
        return this.authService.login(req.user);
    }
};
__decorate([
    roles_decorator_1.Roles('sender'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Post('newdelivery'),
    __param(0, common_1.Request()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_delivery_dto_1.CreateDeliveryDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createDelivery", null);
__decorate([
    roles_decorator_1.Roles('sender'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Post('asigndelivery'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "asignDelivery", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('getdeliveries/:date'),
    __param(0, common_1.Request()), __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Date]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getDeliveries", null);
__decorate([
    roles_decorator_1.Roles('sender'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Post('newuser'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createUser", null);
__decorate([
    roles_decorator_1.Roles('sender'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    common_1.Get('userslist'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        users_service_1.UsersService,
        couriers_service_1.CouriersService,
        sender_service_1.SenderService,
        deliveries_service_1.DeliveriesService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map