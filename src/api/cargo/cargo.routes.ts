import { Router } from "express";
import {
  createCargoHandler,
  getCargoHandler,
  updateCargoHandler,
} from "./cargo.controller";

const router = Router();

// Route to create a new cargo shipment
router.post("/", createCargoHandler);

// Route to get cargo shipment details by ID
router.get("/:shipmentId", getCargoHandler);

// Route to update cargo shipment status
router.patch("/:shipmentId", updateCargoHandler);

export default router;
