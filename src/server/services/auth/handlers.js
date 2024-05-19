import { createUser, findUserByName } from "../../../db/models/user.js";

export async function register(req, res) {
  try {
    const data = await createUser(req.body);
    res.json({ data });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function authenticate(req, res) {
  try {
    const { username, password } = req.body;
    const data = await findUserByName({ username });

    if (!data) {
      throw new Error("User not found");
    }

    if (data.password !== password) {
      throw new Error("Invalid password");
    }

    res.json({ success: true });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
