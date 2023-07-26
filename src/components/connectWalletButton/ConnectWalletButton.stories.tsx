import type { Meta, StoryObj } from '@storybook/react'
import ConnectWalletButton from './ConnectWalletButton'
import { HashRouter} from 'react-router-dom'

const meta: Meta<typeof ConnectWalletButton> = {
    title: 'Components/ConnectWalletButton',
    component: ConnectWalletButton,
}

export default meta

type Story = StoryObj<typeof ConnectWalletButton>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <ConnectWalletButton />
        </HashRouter>
    )
}
     

