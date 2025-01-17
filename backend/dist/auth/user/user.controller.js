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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const auth_dto_1 = require("../../types/auth.dto");
const user_service_1 = require("./user.service");
const auth_guard_1 = require("../auth.guard");
const auth_dto_2 = require("../../types/auth.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    registerView(data) {
        return this.userService.registerView(data);
    }
    loginView(data) {
        return this.userService.loginView(data);
    }
    async profileView(req) {
        const user = await req?.user;
        console.log(user);
        return this.userService.profileView(user?.userId);
    }
    async updateProfileView(req, data) {
        const user = await req?.user;
        console.log(user);
        return this.userService.updateProfileView(user?.userId, data);
    }
    async changePasswordView(req, data) {
        const user = await req?.user;
        console.log(user);
        return this.userService.changePasswordView(user?.userId, data);
    }
    async forgetPasswordView(req, data) {
        return this.userService.forgetPasswordView(data);
    }
    async ValidateResetPasswordToken(req) {
        const user = await req?.user;
        return this.userService.ValidateResetPasswordToken({ email: user.email, userId: user.userId });
    }
    async ResetpasswordView(req, data) {
        const user = await req?.user;
        return this.userService.ResetpasswordView({ email: user.email, userId: user.userId }, data);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("/register"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.Register]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "registerView", null);
__decorate([
    (0, common_1.Post)("/login"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.Login]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "loginView", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)("/profile"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "profileView", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)("/profile/update"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_2.Update]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfileView", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)("/profile/change-password"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.ChangePassword]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePasswordView", null);
__decorate([
    (0, common_1.Post)("/forget-password"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.ForgetPassword]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "forgetPasswordView", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)("/validate-reset-password-token"),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ValidateResetPasswordToken", null);
__decorate([
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)("/reset-password"),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.ResetPassword]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "ResetpasswordView", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('api/v1/auth'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map