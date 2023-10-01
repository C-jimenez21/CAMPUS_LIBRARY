import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .nonempty({
      message: "Username is empty",
    }),
  email: z
    .string({
      required_error: "Email is required and must be a string",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
  rol: z
    .enum(['Usuario', 'Admin', 'Empleado']),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required and must be a string",
    })
    .email({
      message: "Email is not valid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});
