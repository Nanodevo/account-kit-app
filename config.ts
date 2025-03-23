import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra"; // Using sepolia from @account-kit/infra
import { QueryClient } from "@tanstack/react-query";

const uiConfig: AlchemyAccountsUIConfig = {
  illustrationStyle: "outline",
  auth: {
    sections: [
      [
        {
          type: "social",
          authProviderId: "auth0",
          mode: "popup",
          auth0Connection: "twitter", 
          displayName: "X",
          logoUrl: "/images/twitter.svg",
          logoUrlDark: "/images/twitter-dark.svg",
          scope: "openid profile",
        },
      ],
      [
        {
          type: "external_wallets",
          walletConnect: { 
            projectId: "1c7aac0d63797e2247521c31294e1826" // Make sure this is a valid WalletConnect project ID
          },
        },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: "unNFcLrZfdMcZp2TngJdFx1PhnX2eqI-" }),
    chain: sepolia,
    ssr: false, // Set to false to avoid hydration issues
    storage: cookieStorage,
    enablePopupOauth: true,
  },
  uiConfig
);

export const queryClient = new QueryClient();