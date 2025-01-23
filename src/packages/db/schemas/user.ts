import { mysqlTable } from "drizzle-orm/mysql-core";

export const UserTable = mysqlTable("user", (t) => ({
  id: t
    .int("id")
    .primaryKey(),
  username: t.varchar("username", { length: 255 }).notNull().unique(),
  password: t.varchar("password", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  role: t.mysqlEnum("role", ["admin", "user"]).notNull().default("user"),
}));
