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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const User_models_1 = require("../../models/User.models");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const mail_1 = require("../../mail");
let UserService = class UserService {
    constructor(userModel, jwtSerice) {
        this.userModel = userModel;
        this.jwtSerice = jwtSerice;
    }
    async registerView(data) {
        const chk_user = await this.userModel.findOne({ email: data.email.toLowerCase() });
        if (chk_user) {
            throw new common_1.BadRequestException("User Already Exist");
            return;
        }
        const user = await this.userModel.create({
            email: data.email,
            password: data.password,
            name: data.name
        });
        const token = await this.jwtSerice.sign({ userId: user._id });
        return {
            "msg": "Register Successfully",
            "token": token
        };
    }
    async loginView(data) {
        const chk_user = await this.userModel.findOne({ email: data.email.toLowerCase() });
        if (!chk_user) {
            throw new common_1.BadRequestException("User Not Exist");
            return;
        }
        const isMatch = await bcrypt.compare(data.password, chk_user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException("Invalid Credentials");
            return;
        }
        const token = await this.jwtSerice.sign({ userId: chk_user._id });
        return {
            "msg": "Login Successfully",
            "token": token
        };
    }
    async profileView(id) {
        console.log(id);
        const chk_user = await this.userModel.findById(id);
        if (!chk_user) {
            throw new common_1.BadRequestException("User Not Exist");
            return;
        }
        return chk_user;
    }
    async updateProfileView(id, data) {
        console.log({
            email: data.email,
            name: data.name,
        });
        const chk_user = await this.userModel.findById(id);
        if (!chk_user) {
            throw new common_1.BadRequestException("User Not Exist");
            return;
        }
        await this.userModel.findByIdAndUpdate(id, {
            email: data.email,
            name: data.name,
        });
        return {
            msg: "Update Successfully"
        };
    }
    async changePasswordView(id, data) {
        const chk_user = await this.userModel.findById(id);
        if (!chk_user) {
            throw new common_1.BadRequestException("User Not Exist");
            return;
        }
        const isMatch = await bcrypt.compare(data.old_password, chk_user.password);
        if (!isMatch) {
            throw new common_1.BadRequestException("Password does not match with old password");
            return;
        }
        const hash = await bcrypt.hash(data.new_password, 10);
        await this.userModel.findByIdAndUpdate(id, {
            password: hash
        });
        return {
            msg: " Password Change Successfully"
        };
    }
    async forgetPasswordView(data) {
        const chk_user = await this.userModel.findOne({ email: data.email.toLowerCase() });
        if (!chk_user) {
            throw new common_1.BadRequestException("Account Not Found");
            return;
        }
        const token = this.jwtSerice.sign({ userId: chk_user._id, email: chk_user.email });
        await (0, mail_1.ForgetPasswordsendEmail)(chk_user.email, chk_user.name, token);
        return {
            msg: "Link Sent on your registered email Address"
        };
    }
    async ValidateResetPasswordToken(data) {
        return data.email;
    }
    async ResetpasswordView(data, body) {
        const chk_user = await this.userModel.findById(data.userId);
        if (!chk_user) {
            throw new common_1.BadRequestException("Account Not Found");
            return;
        }
        if (body.c_password !== body.password) {
            throw new common_1.BadRequestException("Password and Confirm Password Does Not Match");
            return;
        }
        const isMatch = await bcrypt.compare(body.password, chk_user.password);
        if (isMatch) {
            throw new common_1.BadRequestException("Do not try old passwords try new");
            return;
        }
        const hash = await bcrypt.hash(body.password, 10);
        await this.userModel.findByIdAndUpdate(data.userId, {
            password: hash
        });
        return {
            msg: "Password Reset Successfully",
            "token": ""
        };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(User_models_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model, jwt_1.JwtService])
], UserService);
//# sourceMappingURL=user.service.js.map