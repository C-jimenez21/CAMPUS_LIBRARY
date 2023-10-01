import { z } from "zod";

/*
{
  * "name": "How to Win Friends and Influence People",
  * "author": "Dale Carnegie",
    "company": "Simon & Schuster",
  * "serial": "9780671027302",
  * "category": "Self-help",
    "description": "How to Win Friends and Influence People is a self-help book written by Dale Carnegie, published in 1936. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. Carnegie argues that following his 30 principles of human relations will enable anyone to make a good first impression, win over new friends, and influence others to see their point of view.",
    "date_created": ISODate("1936-10-20"),
  * "stock": 5,
    "image": "https://covers.openlibrary.org/b/id/986197-M.jpg",
    "qualify": 4.5,
  * "pages": 246
},
*/

export const productSchema = z.object({
    name: z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    author: z.string({
        required_error: "Author is required",
        invalid_type_error: "Author must be a string",
    }).optional(),
    company: z.string({
        required_error: "Company is required",
        invalid_type_error: "Company must be a string",
    }).optional(),
    serial: z.string({
        required_error: "Serial is required",
        invalid_type_error: "Serial must be a string",
    }),
    category: z.string({
        required_error: "Category is required",
        invalid_type_error: "Category must be a string",
    }).optional(),
    description: z.string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
    }).optional(),
    date_created: z.string().optional(),
    stock: z.number({
        required_error: "Stock is required",
        invalid_type_error: "Stock must be a number",
    }),
    image: z.string({
        required_error: "image is required",
        invalid_type_error: "image must be a string",
    }).optional(),
    qualify: z.number({
        required_error: "qualify is required",
        invalid_type_error: "qualify must be a number",
    }).optional(),
    pages: z.number({
        required_error: "Pages is required",
        invalid_type_error: "Pages must be a number",
    }),
});

