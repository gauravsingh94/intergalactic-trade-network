import prisma from "../../config/database";

export const getRealTimeUpdates = async () => {
  const trades = await prisma.trade.findMany();
  const cargo = await prisma.cargo.findMany();

  return {
    trades,
    cargo,
  };
};
