import { defineConfig } from '@wagmi/cli'
import { faucetAbi, holidayCollectible2023Abi } from './src/data/abis'
import { react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated/wagmi-hooks.ts',
  contracts: [
    {
      name: "faucet",
      abi: faucetAbi
    },
    {
      name: "holidayCollectible2023",
      abi: holidayCollectible2023Abi
    }
],
  plugins: [react()],
})
