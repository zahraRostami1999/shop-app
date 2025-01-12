import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
   const queryClient = new QueryClient({
      defaultOptions: {
         queries: {
            refetchInterval: 30 * 60 * 1000,
            refetchOnWindowFocus: false,
            staleTime: 60 * 60 * 1000,
         },
      },
   });
   return (
      <>
         <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </>
   );
};
