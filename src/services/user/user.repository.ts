"server only";

import { UserTable } from "@/packages/db/schemas";
import { db } from "@/packages/db";
import { UserInput } from "./user.type";
import { eq, and } from "drizzle-orm";

export const createUser = async (input: UserInput) => {
  return await db.insert(UserTable).values(input);
};

export const getUserByEmailAndPassword = async (email: string, password: string) => {
  return await db
    .select({
      email: UserTable.email,
      password: UserTable.password,
    })
    .from(UserTable)
    .where(and(eq(UserTable.email, email), eq(UserTable.password, password)))
};
