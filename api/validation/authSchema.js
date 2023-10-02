import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "name is required",
      invalid_type_error: "name must be a string",
    }).optional(),
  lastname: z
    .string({
      required_error: "lastname is required",
      invalid_type_error: "lastname must be a string",
    }).optional(),
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
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone must be a int",
    })
    .optional()
    .nullable(),

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
