"use server";

import prisma from "@/lib/db";

export const deleteLorem = async (id: string) => {
  await prisma.lorem.delete({
    where: { id: id },
  });
};
