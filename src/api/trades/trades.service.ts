import prisma from "../../config/database";
import redisClient from "../../config/redis";

export const createTrade = async (tradeData: any) => {
  return await prisma.trade.create({ data: tradeData });
};

export const getTradeById = async (transactionId: string) => {
  const cacheKey = `trade:${transactionId}`;
  const cacheTrade = await redisClient.get(cacheKey);
  if (cacheTrade) {
    return JSON.parse(cacheTrade);
  }
  const trade = await prisma.trade.findUnique({ where: { id: transactionId } });
  await redisClient.set(cacheKey, JSON.stringify(cacheTrade), "EX", 60);
  return trade;
};
