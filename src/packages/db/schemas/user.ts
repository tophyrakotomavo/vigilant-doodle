import { mysqlTable } from "drizzle-orm/mysql-core";

export const UserTable = mysqlTable("user", (t) => ({
  id: t
    .int("id")
    .primaryKey(),
  password: t.varchar("password", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
}));
