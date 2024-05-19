import * as crypto from "node:crypto";
import { createUser, findUserByName } from "../../../db/models/user.js";
import { getPasswordHash } from "../../utils/helpers.js";

export async function register(req, res) {
  try {
    const salt = crypto.randomBytes(16);
    const passwordHash = await getPasswordHash(req.body.password, salt);
    const data = await createUser({
      username: req.body.username,
      email: req.body.email,
      password_hash: passwordHash,
      salt: salt,
    });
    req.login(data, () => {
      res.json({ data });
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function passportAuth(username, password, done) {
  try {
    const user = await findUserByName({ username });
    if (!user) {
      return done(null, false);
    }

    const passwordHash = await getPasswordHash(password, user.salt);
    if (!crypto.timingSafeEqual(passwordHash, user.password_hash)) {
      return done(null, false, { message: "Incorrect password." });
    }

    return done(null, user);
  } catch (error) {
    return done(error);
  }
}
