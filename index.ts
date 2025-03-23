import { createPublicClient, http, Block } from "viem";
import { mainnet } from "viem/chains";

// Use environment variable or an empty string as fallback
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || "";

const client = createPublicClient({
  chain: mainnet,
  transport: http(`https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_API_KEY}`),
});

async function main() {
  try {
    const block: Block = await client.getBlock({
      blockNumber: BigInt(123456),
    });
    console.log(block);
  } catch (error) {
    console.error("Error fetching block:", error);
  }
}

main();