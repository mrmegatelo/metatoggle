import { Router } from "express";
import { createUser } from "../../../db/models/user.js";

const router = Router();

router.post("/login", (req, res) => {
  // TODO - Implement login
  res.json({ message: "Login" });
});

router.post("/logout", (req, res) => {
  // TODO - Implement logout
  res.json({ message: "Logout" });
});

router.post("/register", async (req, res) => {
  const data = await createUser(req.body);
  res.json({ data });
});

export default router;
