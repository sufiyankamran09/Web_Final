import { z } from "zod";

export const MyFormSchema = z.object({
  text: z.string().min(2).max(50),
});