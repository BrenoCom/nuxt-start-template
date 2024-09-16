import { dbClient } from "@/server/infra/database";
import handdleErrorGeneric from "@/server/common/error/HandleErrorGeneric";

export default defineEventHandler(async () => {
  let r;
  let err;
  try {
    const versao = await dbClient.$queryRaw<{ server_version: string }[]>`
      SHOW server_version;`;
    const max_connections = await dbClient.$queryRaw<
      { max_connections: string }[]
    >`
      SHOW MAX_CONNECTIONS;`;
    const databaseName = process.env.POSTGRES_DB;
    const dbCurrentCons = await dbClient.$queryRaw<{ count: number }[]>`
      SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = ${databaseName};`;

    const updatedAt = new Date().toISOString();
    r = {
      updated_at: updatedAt,
      dependencies: {
        database: {
          version: versao[0].server_version,
          max_connections: parseInt(max_connections[0].max_connections),
          current_connections: dbCurrentCons[0].count,
        },
      },
    };
    return r;
  } catch (error) {
    err = handdleErrorGeneric(error);
    throw err;
  } finally {
    await dbClient.$disconnect();
  }
});
