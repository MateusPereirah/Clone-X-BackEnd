import { z } from "zod";

export const signupSchema = z.object({
    name: z.string({ message: 'Nome é obrigatório' }).min(2, 'Precisa ter dois ou mais caracteres'),
    email: z.string({ message: 'E-mail é obrigatório' }).email('E-mail inválido'),
    password: z.string({ message: 'Senha é obrigatória' }).min(4, 'Precisa ter quatro ou mais caracteres')
});