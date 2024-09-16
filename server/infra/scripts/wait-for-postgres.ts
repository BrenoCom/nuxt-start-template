/* eslint-disable */
import { exec, type ExecException } from "node:child_process";

async function checkServices() {
  console.log("\n🟦 Cheking Postgres");
  checkPostgres();
}

function checkPostgres() {
  function handleReturn(
    error: ExecException | null,
    stdout: string,
    stderr: string
  ) {
    if (stdout.search("accepting connections") === -1) {
      checkPostgres();
      process.stdout.write(".");
      return;
    }

    console.log("\n🟩 Postgres ready 💾");
  }
  //@ts-ignore
  exec(
    "docker exec postgres-dev pg_isready --host localhost",
    //@ts-ignore
    handleReturn,
    () => {}
  );
}

checkServices();
