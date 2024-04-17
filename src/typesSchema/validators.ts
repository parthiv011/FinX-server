import zod from "zod";

export const RegisterUserSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
    phoneNumber: zod.string().regex(/^\+91-\d{5}\s\d{5}$/)
});

export const LoginUserSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

export const updateUserSchema = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
});
