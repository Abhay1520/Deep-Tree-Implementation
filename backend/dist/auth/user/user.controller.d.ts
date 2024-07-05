import { ChangePassword, ForgetPassword, Login, Register, ResetPassword } from 'src/types/auth.dto';
import { UserService } from './user.service';
import { Update } from '../../types/auth.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    registerView(data: Register): Promise<{
        msg: string;
        token: string;
    }>;
    loginView(data: Login): Promise<{
        msg: string;
        token: string;
    }>;
    profileView(req: any): Promise<import("mongoose").Document<unknown, {}, import("../../models/User.models").User> & import("../../models/User.models").User & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    updateProfileView(req: any, data: Update): Promise<{
        msg: string;
    }>;
    changePasswordView(req: any, data: ChangePassword): Promise<{
        msg: string;
    }>;
    forgetPasswordView(req: any, data: ForgetPassword): Promise<{
        msg: string;
    }>;
    ValidateResetPasswordToken(req: any): Promise<string>;
    ResetpasswordView(req: any, data: ResetPassword): Promise<{
        msg: string;
        token: string;
    }>;
}
