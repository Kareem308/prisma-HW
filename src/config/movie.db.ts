import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "error", "warn"],
  errorFormat: "pretty",
});

const moviedb = () => {
  try {
    prisma.$connect();
    console.log("Database connected");

  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export { prisma, moviedb };
