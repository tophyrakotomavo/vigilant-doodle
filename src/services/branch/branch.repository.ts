"server only";

import { BranchTable } from "@/packages/db/schemas/branch";
import { db } from "@/packages/db";
import { BranchInput } from "./branch.type";
import { eq } from "drizzle-orm";

export const createBranch = async (input: BranchInput) => {
    return await db.insert(BranchTable).values(input);
};

export const getBranchByName = async (name: string) => {
    return await db
        .select()
        .from(BranchTable)
        .where(eq(BranchTable.name, name));
};