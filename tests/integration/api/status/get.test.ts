import { beforeAll, describe, expect, it } from "vitest";
import orquestrator from "../../../orquestrator";

beforeAll(async () => {
  await orquestrator.waitForAllServices();
  await orquestrator.clearDatabase();
});

const baseUrl = process.env.SITE_URL_HTTP;

describe("GET /api/v1/status", async () => {
  describe("Anonymous user", () => {
    it("Check returned properties", async () => {
      const response = await fetch(baseUrl + "/api/v1/status");

      expect(response.ok).toBe(true);

      const data = await response.json();

      expect(data).toHaveProperty("updated_at");
      expect(data).toHaveProperty("dependencies");
      expect(data?.dependencies).toHaveProperty("database");
      expect(data?.dependencies.database).toHaveProperty("version");
      expect(data?.dependencies.database).toHaveProperty("max_connections");
      expect(data?.dependencies.database).toHaveProperty("current_connections");

      const parsedUpdatedAt = new Date(data.updated_at).toISOString();
      expect(data.updated_at).toEqual(parsedUpdatedAt);

      expect(data.dependencies.database.version).toBeTypeOf("string");

      expect(data.dependencies.database.max_connections).toBeTypeOf("number");
      expect(data.dependencies.database.max_connections).toBeGreaterThan(-1);

      expect(data.dependencies.database.current_connections).toBeTypeOf(
        "number"
      );
      expect(data.dependencies.database.current_connections).toEqual(1);
    });
  });
});
