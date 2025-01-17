"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user/user.controller");
const user_service_1 = require("./user/user.service");
const mongoose_1 = require("@nestjs/mongoose");
const User_models_1 = require("../models/User.models");
const bcrypt = require("bcrypt");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: User_models_1.User.name,
                    async useFactory() {
                        const schema = User_models_1.UserSchema;
                        schema.pre("save", async function () {
                            if (this.isModified("password")) {
                                this.password = await bcrypt.hash(this.password, 10);
                            }
                        });
                        return schema;
                    }
                }
            ])
        ],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UserService]
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map