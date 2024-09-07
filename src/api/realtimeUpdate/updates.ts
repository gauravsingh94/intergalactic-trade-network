import express, { Request, Response } from "express";
import { getRealTimeUpdates } from "./updates.service";

const router = express.Router();

// Route to handle real-time updates using Server-Sent Events (SSE)
router.get("/real-time", (req: Request, res: Response) => {
  // Set headers for SSE
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Function to send data to the client
  const sendUpdate = async () => {
    try {
      const updates = await getRealTimeUpdates();

      // Send the update to the client
      res.write(`data: ${JSON.stringify(updates)}\n\n`);
    } catch (error) {
      console.error("Error fetching real-time updates:", error);
      res.write(
        `data: ${JSON.stringify({ error: "Error fetching updates" })}\n\n`,
      );
    }
  };

  // Send initial data
  sendUpdate();

  // Send updates periodically (for example, every 5 seconds)
  const interval = setInterval(sendUpdate, 5000);

  // Cleanup when the client disconnects
  req.on("close", () => {
    clearInterval(interval);
  });
});

export default router;
