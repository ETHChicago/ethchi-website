
import type { Meta, StoryObj } from '@storybook/react'
import ConnectWalletButton from './ConnectWalletButton'
import { WagmiConfig } from 'wagmi'
import wagmiConfig from '../../wagmiConfig'

const meta: Meta<typeof ConnectWalletButton> = {
    title: 'Components/Connect Wallet Button',
    component: ConnectWalletButton
}

export default meta

type Story = StoryObj<typeof ConnectWalletButton>

export const Primary: Story = {
    render: () => (
        <WagmiConfig config={wagmiConfig}>
            <ConnectWalletButton />
        </WagmiConfig>
    )
}