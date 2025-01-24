import { UserTable } from "@/packages/db/schemas";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const zUserOutput = createSelectSchema(UserTable);
export type UserOutput = z.infer<typeof zUserOutput>;

export const zUserInput = createInsertSchema(UserTable);

export type UserInput = z.infer<typeof zUserInput>;

export interface UserLogin {
  email: string;
  password: string;
}
