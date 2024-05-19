import { Router } from "express";
import { createFlag, deleteFlag, getFlag, getFlagsList, updateFlag } from "./handlers.js";

const router = Router();

router.route("/").get(getFlagsList).post(createFlag);

router.route("/:id").get(getFlag).put(updateFlag).delete(deleteFlag);

export default router;
