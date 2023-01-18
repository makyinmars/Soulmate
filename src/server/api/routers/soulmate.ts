import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const soulmateRouter = createTRPCRouter({
  createSoulmate: protectedProcedure
    .input(
      z.object({
        names: z.string(),
        initialDate: z.string(),
        userId: z.string(),
      })
    )
    .mutation(({ input: { names, initialDate, userId }, ctx }) => {
      return ctx.prisma.soulmate.create({
        data: {
          names,
          initialDate,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    }),

  addPicture: protectedProcedure
    .input(z.object({ picture: z.string(), id: z.string() }))
    .mutation(({ input: { picture, id }, ctx }) => {
      return ctx.prisma.soulmate.update({
        where: {
          id,
        },
        data: {
          picture,
        },
      });
    }),
});
