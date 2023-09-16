import { configureChains, createConfig } from "wagmi"
import { goerli } from '@wagmi/core/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()]
)
const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient
})

export default wagmiConfig