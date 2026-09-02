import { Env } from '@/lib/Env';
import { createDbConnection } from '../utils/DBConnection';

type DbInstance = ReturnType<typeof createDbConnection>;

declare global {
  var cachedDrizzle: DbInstance | undefined;
}

const db = globalThis.cachedDrizzle ?? createDbConnection();

if (Env.NODE_ENV !== 'production') {
  globalThis.cachedDrizzle = db;
}

export { db };
