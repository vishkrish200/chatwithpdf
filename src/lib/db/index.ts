import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

neonConfig.fetchConnectionCache = true;

if (!process.env.DRIZZLE_DATABASE_URL) throw new Error("Database error");

const sql = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql);

// const result = await db.select().from(...);
