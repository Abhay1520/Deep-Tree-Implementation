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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const constant_1 = require("../constant");
let AuthGuard = class AuthGuard {
    constructor(jwtSerive) {
        this.jwtSerive = jwtSerive;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authToken = request.headers['authorization'] || '';
        if (!authToken || !authToken.startsWith("Bearer ")) {
            throw new common_1.UnauthorizedException("Please Login First");
            return;
        }
        const token = authToken.split(" ")[1];
        if (!token) {
            throw new common_1.UnauthorizedException("Token not valid");
            return;
        }
        try {
            const payload = this.jwtSerive.verifyAsync(token, {
                secret: constant_1.JWT_KEY
            });
            request['user'] = payload;
        }
        catch (error) {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map