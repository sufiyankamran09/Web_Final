"use server";

import prisma from "@/lib/db";
import { MyFormSchema } from "@/schemas/loremSchema";
import { z } from "zod";

export const createLorem = async (values: z.infer<typeof MyFormSchema>) => {
  const validatedValues = MyFormSchema.safeParse(values);

  if (!validatedValues.success) {
    return {
      error: "Invalid values",
    };
  }

  await prisma.lorem.create({
    data: {
      name: validatedValues.data.text,
      isCompleted: true,
    },
  });
};
