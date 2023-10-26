import { PrismaClient } from "@prisma/client";
const globalPrisma = global as unknown as {prisma: PrismaClient}

export const prisma =globalPrisma.prisma || new PrismaClient({
  log: []
})

if(process.env.NODE_ENV !== 'production') globalPrisma.prisma = prisma
