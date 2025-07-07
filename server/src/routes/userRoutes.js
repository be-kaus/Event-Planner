import express from "express";
import { GetProfile } from "../controllers/userController.js";

const router = express.Router();

router.post("/profile",GetProfile);

export default router;

