import { mysqlTable } from "drizzle-orm/mysql-core";

export const BranchTable = mysqlTable("branch", (t) => ({
    id: t
        .varchar("id", { length: 255 })
        .primaryKey(),
    name: t.varchar("name", { length: 255 }).notNull(),
    type: t.mysqlEnum("type", ["choral", "afafi", "fefi", 'lamp', 'ktza', 'ktzo', 'gae', 'smk', 'stkvm', 'mim', 'fanantenana', 'saha', 'vnm']).notNull(),
    church: t.varchar("church", { length: 255 }).notNull(),
    mpiray_lohavolana: t.int("mpiray_lohavolana").notNull(),
    zone: t.varchar("zone", { length: 255 }).notNull(),
    created_at: t.datetime("created_at").notNull(),
    voatokana: t.boolean("voatokana").notNull().default(false),
    people: t.int("people").notNull().default(0),
    administrator: t.int("administrator").notNull().default(1),
    president: t.varchar("president", { length: 255 }).notNull(),
    president_phone: t.varchar("president_phone", { length: 255 }).notNull(),
    president_email: t.varchar("president_email", { length: 255 }).notNull(),
    vice_president: t.varchar("vice_president", { length: 255 }),
    vice_president_phone: t.varchar("vice_president_phone", { length: 255 }),
    vice_president_email: t.varchar("vice_president_email", { length: 255 }),
}));