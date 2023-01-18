import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getUserById: protectedProcedure
    .input(z.object({ id: z.string().nullable() }))
    .query(({ input: { id }, ctx }) => {
      if (id) {
        return ctx.prisma.user.findUnique({
          where: {
            id,
          },
        });
      }
    }),
});
