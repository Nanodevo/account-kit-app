import {
  AlchemyAccountsUIConfig,
  cookieStorage,
  createConfig,
} from "@account-kit/react";
import { alchemy, sepolia } from "@account-kit/infra"; // Using sepolia from @account-kit/infra
import { QueryClient } from "@tanstack/react-query";

// Use environment variables with fallbacks for local development
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";
const WALLET_CONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "";

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
            projectId: WALLET_CONNECT_PROJECT_ID
          },
        },
      ],
    ],
    addPasskeyOnSignup: false,
  },
};

export const config = createConfig(
  {
    transport: alchemy({ apiKey: ALCHEMY_API_KEY }),
    chain: sepolia,
    ssr: false, // Set to false to avoid hydration issues
    storage: cookieStorage,
    enablePopupOauth: true,
  },
  uiConfig
);

export const queryClient = new QueryClient();