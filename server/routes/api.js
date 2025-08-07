import express from "express";
import * as auth from "../controllers/authController.js";
import { authGuard, roleGuard } from "../middleware/auth.js";

const router = express.Router();

router.post("/auth/login", auth.login);
router.post("/auth/register", auth.register);
router.post("/auth/refresh", auth.refresh);

router.get("/secure/ping", authGuard, roleGuard(["Student","Instructor","Admin"]), (_req, res) => res.json({ ok: true }));

export default router;
