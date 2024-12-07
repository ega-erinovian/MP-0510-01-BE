import { prisma } from "../../lib/prisma";

export const getEventsService = async () => {
  try {
    const events = prisma.event.findMany({
      include: {
        organizer: {
          select: {
            id: true,
            fullName: true,
          },
        },
        city: {
          select: {
            id: true,
            name: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    return events;
  } catch (error) {
    throw error;
  }
};
