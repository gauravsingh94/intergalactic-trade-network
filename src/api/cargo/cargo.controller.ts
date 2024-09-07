import { Request, Response } from "express";
import { createCargo, getCargoById, updateCargoStatus } from "./cargo.service";

export const createCargoHandler = async (req: Request, res: Response) => {
  try {
    const cargo = await createCargo(req.body);
    res.status(201).json(cargo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getCargoHandler = async (req: Request, res: Response) => {
  try {
    const cargo = await getCargoById(req.params.shipmentId);
    if (!cargo) {
      return res.status(404).json({ message: "Cargo not found" });
    }
    res.json(cargo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateCargoHandler = async (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    const cargo = await updateCargoStatus(req.params.shipmentId, status);
    res.json(cargo);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
