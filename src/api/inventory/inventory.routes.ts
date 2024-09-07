import { Router } from "express";
import {
  createOrUpdateInventoryHandler,
  getInventoryHandler,
} from "./inventory.controller";

const router = Router();

// Route to create or update inventory
router.post("/", createOrUpdateInventoryHandler);

// Route to get inventory levels for a space station
router.get("/:stationId", getInventoryHandler);

export default router;
