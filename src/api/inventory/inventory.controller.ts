import { Request, Response } from "express";
import {
  createOrUpdateInventory,
  getInventoryByStationId,
} from "./inventory.service";

export const createOrUpdateInventoryHandler = async (
  req: Request,
  res: Response,
) => {
  try {
    console.log("Request is reaching here.");
    const inventory = await createOrUpdateInventory(req.body);
    res.status(201).json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getInventoryHandler = async (req: Request, res: Response) => {
  try {
    const inventory = await getInventoryByStationId(req.params.stationId);
    if (!inventory || inventory.length === 0) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
