import prisma from "../../config/database";
import redisClient from "../../config/redis";

export const createOrUpdateInventory = async (inventoryData: {
  stationId: string;
  itemId: string;
  quantity: number;
}) => {
  const { stationId, itemId, quantity } = inventoryData;

  return await prisma.inventory.upsert({
    where: {
      id: `${stationId}_${itemId}`,
    },
    update: { quantity },
    create: { stationId, itemId, quantity },
  });
};

export const getInventoryByStationId = async (stationId: string) => {
  const cacheKey = `inventory:${stationId}`;
  const cachedInventory = await redisClient.get(cacheKey);

  if (cachedInventory) {
    return JSON.parse(cachedInventory);
  }

  const inventory = await prisma.inventory.findMany({ where: { stationId } });

  await redisClient.set(cacheKey, JSON.stringify(inventory), "EX", 60);

  return inventory;
};
