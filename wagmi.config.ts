import { defineConfig } from '@wagmi/cli'
import { faucetAbi } from './src/data/abis'
import { react } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/generated/wagmi-hooks.ts',
  contracts: [{
	  name: "faucet",
	  abi: faucetAbi
  }],
  plugins: [react()],
})
