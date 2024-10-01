import { z } from 'zod';

export const addTweetSchema = z.object({
    body: z.string({ message: "Precisa enivar um corpo" }),
    answer: z.string().optional()
});