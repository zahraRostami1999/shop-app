import React, { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const ReactQueryProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}
      </QueryClientProvider>
    </>
  );
};
