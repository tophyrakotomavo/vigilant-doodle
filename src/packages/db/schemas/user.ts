import { mysqlTable } from "drizzle-orm/mysql-core";

export const UserTable = mysqlTable("user", (t) => ({
  id: t
    .varchar("id", { length: 255 })
    .primaryKey(),
  username: t.varchar("username", { length: 255 }).notNull().unique(),
  password: t.varchar("password", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  role: t.mysqlEnum("role", ["admin", "user"]).notNull().default("user"),
  address: t.varchar("address", { length: 255 }),
  phone: t.varchar("phone", { length: 20 }),
}));
