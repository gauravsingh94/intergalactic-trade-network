import { Router } from "express";
import cargoRoutes from "./cargo/cargo.routes";
import inventoryRoutes from "./inventory/inventory.routes";
import tradeRoutes from "./trades/trades.routes";
import realtimeUpdate from "./realtimeUpdate/updates";

const router = Router();

router.use("/cargo", cargoRoutes);
router.use("/inventory", inventoryRoutes);
router.use("/trades", tradeRoutes);
router.use("/updates", realtimeUpdate);

export default router;
