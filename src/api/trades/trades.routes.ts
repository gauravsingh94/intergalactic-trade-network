import { Router } from "express";
import { createTradeHandler, getTradeHandler } from "./trades.controller";

const router = Router();

router.post("/", createTradeHandler);
router.get("/:transactionId", getTradeHandler);

export default router;
