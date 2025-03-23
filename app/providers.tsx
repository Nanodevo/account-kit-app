"use client";
import { config, queryClient } from "@/config";
import { AlchemyClientState, cookieToInitialState } from "@account-kit/core";
import { AlchemyAccountProvider } from "@account-kit/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useEffect, useState } from "react";

export const Providers = (props: PropsWithChildren) => {
  const [initialState, setInitialState] = useState<AlchemyClientState | undefined>(undefined);

  // Handle client-side cookie parsing
  useEffect(() => {
    const state = cookieToInitialState(config, document.cookie);
    setInitialState(state);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider
        config={config}
        queryClient={queryClient}
        initialState={initialState}
      >
        {props.children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  );
};
