import { Model } from 'mongoose';
import { User } from 'src/models/User.models';
import { ChangePassword, ForgetPassword, Login, Register, ResetPassword } from 'src/types/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Update } from '../../types/auth.dto';
export declare class UserService {
    private userModel;
    private jwtSerice;
    constructor(userModel: Model<User>, jwtSerice: JwtService);
    registerView(data: Register): Promise<{
        msg: string;
        token: string;
    }>;
    loginView(data: Login): Promise<{
        msg: string;
        token: string;
    }>;
    profileView(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProfileView(id: string, data: Update): Promise<{
        msg: string;
    }>;
    changePasswordView(id: string, data: ChangePassword): Promise<{
        msg: string;
    }>;
    forgetPasswordView(data: ForgetPassword): Promise<{
        msg: string;
    }>;
    ValidateResetPasswordToken(data: {
        email: string;
        userId: string;
    }): Promise<string>;
    ResetpasswordView(data: {
        email: string;
        userId: string;
    }, body: ResetPassword): Promise<{
        msg: string;
        token: string;
    }>;
}
