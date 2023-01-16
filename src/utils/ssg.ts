import type { GetServerSidePropsContext } from "next";
import superjson from "superjson";
import { createProxySSGHelpers } from "@trpc/react-query/ssg";

import { createInnerTRPCContext } from "src/server/api/trpc";
import { getServerAuthSession } from "src/server/auth";
import { appRouter } from "src/server/api/root";

/**
 * Initialize server-side rendering tRPC helpers.
 * Provides a method to prefetch tRPC-queries in a `getServerSideProps`-function.
 * Make sure to `return { props: { trpcState: ssr.dehydrate() } }` at the end.
 */
export const ssrInit = async (context: GetServerSidePropsContext) => {
  const session = await getServerAuthSession(context);

  const ctx = createInnerTRPCContext({ session });

  const ssg = createProxySSGHelpers({
    ctx,
    router: appRouter,
    transformer: superjson,
  });

  return {
    ssg,
    session,
  };
};
