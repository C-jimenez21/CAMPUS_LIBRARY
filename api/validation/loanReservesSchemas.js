import { z } from "zod";

/*
 {
    user: "bob@example.com",
    Product: "9780671708610",
    reservedDate: ISODate("2023-10-22"),
    state: "rechazada"
  }
 */
export const reserveSchema = z.object({
    user: z.string({
        required_error: "user is required",
        invalid_type_error: "user must be a string",
    }),
    product: z.string({
        required_error: "product is required",
        invalid_type_error: "Product must be a string",
    }),
    reservedDate: z.string({
        required_error: "reservedDate is required",
        invalid_type_error: "reservedDate must be a string",
    }),
    state: z
    .enum(['aprobada', 'rechazada', 'completada'])
});
