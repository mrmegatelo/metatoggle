import * as crypto from "node:crypto";

export function getPasswordHash(password, salt) {
  return new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 1000, 64, "sha512", (err, hash) => {
      if (err) {
        reject(err);
      }

      resolve(hash);
    });
  });
}
