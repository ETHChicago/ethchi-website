import { defineConfig } from '@wagmi/cli'
import { faucetAbi } from './src/data/abis'

export default defineConfig({
  out: 'src/generated/wagmi-hooks.ts',
  contracts: [{
	  name: "faucet",
	  abi: faucetAbi
  }],
  plugins: [],
})
