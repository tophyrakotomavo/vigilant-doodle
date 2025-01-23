import { mysqlTable } from "drizzle-orm/mysql-core";
import { UserRole } from "./enums";

export const UserTable = mysqlTable("user", (t) => ({
  id: t
    .varchar("id", { length: 255 })
    .primaryKey(),
  username: t.varchar("username", { length: 255 }).notNull().unique(),
  password: t.varchar("password", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  address: t.varchar("address", { length: 255 }),
  phone: t.varchar("phone", { length: 20 }),
}));
