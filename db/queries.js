import pool from "./pool.js";

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(messageId) {
  const { rows } = await pool.query(
    `SELECT * FROM messages WHERE id = ${messageId}`,
  );
  return rows;
}

async function addMessage(username, message) {
  await pool.query(
    `INSERT INTO messages (username, message, added) VALUES ('${username}', '${message}',  CURRENT_TIMESTAMP)`,
  );
}

export { getAllMessages, getMessageById, addMessage };
