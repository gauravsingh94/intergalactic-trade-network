import prisma from "../../config/database";
import redisClient from "../../config/redis";

// Create a new cargo shipment
export const createCargo = async (cargoData: any) => {
  return await prisma.cargo.create({ data: cargoData });
};

// Get cargo shipment details by ID
export const getCargoById = async (shipmentId: string) => {
  const cacheKey = `cargo:${shipmentId}`;
  const cacheShipment = await redisClient.get(cacheKey);
  if (cacheShipment) {
    return JSON.parse(cacheShipment);
  }
  const shipment = await prisma.cargo.findUnique({ where: { id: shipmentId } });
  await redisClient.set(cacheKey, JSON.stringify(shipment), "EX", 60);
  return shipment;
};

// Update cargo shipment status
export const updateCargoStatus = async (shipmentId: string, status: string) => {
  return await prisma.cargo.update({
    where: { id: shipmentId },
    data: { status },
  });
};
