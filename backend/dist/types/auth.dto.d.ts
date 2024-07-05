export declare class Register {
    name: string;
    email: string;
    password: string;
}
export declare class Login {
    email: string;
    password: string;
}
export declare class Update {
    email: string;
    name: string;
}
export declare class ChangePassword {
    new_password: string;
    old_password: string;
}
export declare class ForgetPassword {
    email: string;
}
export declare class ResetPassword {
    password: string;
    c_password: string;
}
