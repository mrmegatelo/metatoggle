import db from "../index.js";

export function getUserFlags({ user_id }) {
  return db("flags").where({ user_id });
}

export async function createNewFlag({ user_id, name, description }) {
  const [result] = await db("flags")
    .insert({ user_id, name, description })
    .returning(["name", "description", "user_id", "enabled", "id"]);

  return result;
}
