import { createPublicClient, http, Block } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({
  chain: mainnet,
  transport: http("https://eth-mainnet.g.alchemy.com/v2/unNFcLrZfdMcZp2TngJdFx1PhnX2eqI-"),
});

const block: Block = await client.getBlock({
  blockNumber: 123456n,
});

console.log(block);