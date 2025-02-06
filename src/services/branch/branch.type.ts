import { BranchTable } from "@/packages/db/schemas/branch";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const zBranchOutput = createSelectSchema(BranchTable);
export type BranchOutput = z.infer<typeof zBranchOutput>;

export const zBranchInput = createInsertSchema(BranchTable);
export type BranchInput = z.infer<typeof zBranchInput>;