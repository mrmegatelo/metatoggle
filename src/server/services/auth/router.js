import { Router } from "express";
import { authenticate, register } from "./handlers.js";

const router = Router();

router.post("/login", authenticate);

router.post("/logout", (req, res) => {
  // TODO - Implement logout
  res.json({ message: "Logout" });
});

router.post("/register", register);

export default router;
