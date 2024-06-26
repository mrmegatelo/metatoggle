import db from "../index.js";

export async function createUser({ username, password_hash, email, salt }) {
  const [result] = await db("users")
    .insert({ username, password_hash, salt, email })
    .returning(["id", "username", "email"]);
  return result;
}

export async function findUserByName({ username }) {
  return db("users").where({ username }).first();
}
