import { env } from "@/env";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schemas";

export const db = drizzle(env.DATABASE_URL!);
