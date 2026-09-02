import { drizzle } from 'drizzle-orm/postgres-js';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { Env } from '@/lib/Env';

export const createDbConnection = (): PostgresJsDatabase => {
  const client = postgres(Env.DATABASE_URL);
  return drizzle(client);
};
