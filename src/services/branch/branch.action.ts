'use server';

import { createBranch } from "./branch.repository";
import { BranchInput } from "./branch.type";

export const createNewBranch = async (input: BranchInput) => {
    await createBranch(input);
}