/* eslint-disable */
import retry from "async-retry";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import { dbClient } from "../server/infra/database.js";

dotenvExpand.expand(dotenv.config());

const siteUrl = process.env.SITE_URL_HTTP;

async function waitForAllServices() {
  await waitFroWebServer();

  async function waitFroWebServer() {
    return retry(fetchStatusPage, {
      retries: 100,
      maxTimeout: 1000,
    });

    async function fetchStatusPage(_parms: any) {
      const response = await fetch(siteUrl + "/api/v1/status");

      if (response.status > 500) {
        throw Error();
      }
    }
  }
}

async function clearDatabase() {
  await dbClient.$executeRaw`DROP SCHEMA public CASCADE;`;
  await dbClient.$executeRaw`CREATE SCHEMA public;`;
  await dbClient.$disconnect();
}

export default {
  waitForAllServices,
  clearDatabase,
};
