"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgetPasswordsendEmail = void 0;
const nodemailer = require("nodemailer");
const constant_1 = require("./constant");
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: constant_1.username,
        pass: constant_1.password,
    },
});
const ForgetPasswordsendEmail = async (email, name, token) => {
    await transporter.sendMail({
        from: 'codehub@gmail.com',
        to: email,
        subject: "Forget password",
        html: `
        
                        Hi,${name},
                        
                        to forget your password plese click the link the link below

                        <a href="http://localhost:3000/reset-password?token=${token}">Click here</a>
        
        `,
    });
};
exports.ForgetPasswordsendEmail = ForgetPasswordsendEmail;
//# sourceMappingURL=mail.js.map