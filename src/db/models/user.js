import db from "../index.js";

export async function createUser({ username, password, email }) {
  const [result] = await db("users").insert({ username, password, email }).returning(["id", "username", "email"]);
  return result;
}

export function findUserByName({ username }) {
  return db("users").where({ username }).first();
}
