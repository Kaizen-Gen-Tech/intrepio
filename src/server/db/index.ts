import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { createClient } from "@supabase/supabase-js";

import { env } from "~/env";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: postgres.Sql | undefined;
};

const conn = globalForDb.conn ?? postgres(env.POSTGRES_URL);
if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });

export const supa = createClient(env.SUPABASE_URL, env.SUPABASE_ANON_KEY, {
  global: {
    headers: {
      Authorization: env.SUPABASE_SERVICE_ROLE_KEY,
    },
  },
});
