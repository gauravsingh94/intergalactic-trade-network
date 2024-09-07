import { Request, Response } from "express";
import { createTrade, getTradeById } from "./trades.service";

export const createTradeHandler = async (req: Request, res: Response) => {
  try {
    const trade = await createTrade(req.body);
    res.status(201).json(trade);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getTradeHandler = async (req: Request, res: Response) => {
  try {
    const trade = await getTradeById(req.params.transactionId);
    if (!trade) {
      return res.status(404).json({ message: "Trade not found" });
    }
    res.json(trade);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
