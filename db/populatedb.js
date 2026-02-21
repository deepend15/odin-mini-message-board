import { Client } from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ),
  message VARCHAR ( 255 ),
  added TIMESTAMP
);

INSERT INTO messages (username, message, added)
VALUES
  ('Amando', 'Hi There!', CURRENT_TIMESTAMP),
  ('Charles', 'Hello World!', CURRENT_TIMESTAMP);
`;

async function main() {
  console.log("Seeding...");
  let connectionStringValue;
  if (process.argv.length > 2) connectionStringValue = process.argv[2];
  else connectionStringValue = process.argv[1];
  const client = new Client({
    connectionString: connectionStringValue,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done!");
}

main();
