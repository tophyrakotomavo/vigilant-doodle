"use server";

import { getScopedI18n } from "@/packages/locales/server";
import type { z } from "zod";
import { zUserInput } from "./user.type";
import { createUser, getUserByEmailAndPassword } from "./user.repository";

export const signinAction = async (input: z.infer<typeof zUserInput>) => {
  const t = await getScopedI18n("user-action");

  const user = await getUserByEmailAndPassword(input.email, input.password);

  if (!user) {
    throw t("invalid-credentials");
  }

  return user;
};

export const signupAction = async (input: z.infer<typeof zUserInput>) => {
  const t = await getScopedI18n("user-action");
  await createUser(input);

};
