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
exports.ResetPassword = exports.ForgetPassword = exports.ChangePassword = exports.Update = exports.Login = exports.Register = void 0;
const class_validator_1 = require("class-validator");
class Register {
}
exports.Register = Register;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is Required" }),
    __metadata("design:type", String)
], Register.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is Required" }),
    __metadata("design:type", String)
], Register.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password is Required" }),
    __metadata("design:type", String)
], Register.prototype, "password", void 0);
class Login {
}
exports.Login = Login;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is Required" }),
    __metadata("design:type", String)
], Login.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Password is Required" }),
    __metadata("design:type", String)
], Login.prototype, "password", void 0);
class Update {
}
exports.Update = Update;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is Required" }),
    __metadata("design:type", String)
], Update.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Name is Required" }),
    __metadata("design:type", String)
], Update.prototype, "name", void 0);
class ChangePassword {
}
exports.ChangePassword = ChangePassword;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "New Password is Required" }),
    __metadata("design:type", String)
], ChangePassword.prototype, "new_password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Old Password is Required" }),
    __metadata("design:type", String)
], ChangePassword.prototype, "old_password", void 0);
class ForgetPassword {
}
exports.ForgetPassword = ForgetPassword;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({ message: "Email is Required" }),
    __metadata("design:type", String)
], ForgetPassword.prototype, "email", void 0);
class ResetPassword {
}
exports.ResetPassword = ResetPassword;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: " Password is Required" }),
    __metadata("design:type", String)
], ResetPassword.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "Confirm Password is Required" }),
    __metadata("design:type", String)
], ResetPassword.prototype, "c_password", void 0);
//# sourceMappingURL=auth.dto.js.map