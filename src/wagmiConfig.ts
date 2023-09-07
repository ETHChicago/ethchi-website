import { createConfig, mainnet } from "wagmi"
import { createPublicClient, http } from 'viem';
import { goerli } from '@wagmi/core/chains'

// TODO: update to use infura client instead of public client

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: goerli,
    transport: http()
  })
})

export default wagmiConfig