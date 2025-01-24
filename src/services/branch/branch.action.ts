'use server';

import { createBranch, getBranchByName } from "./branch.repository";
import { BranchInput } from "./branch.type";

export const createNewBranch = async (input: BranchInput) => {
    await createBranch(input);
}

export const getBranchByNameAction = async (name: string) => {
    return await getBranchByName(name);
}