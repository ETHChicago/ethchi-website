import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import About from './About'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { WagmiConfig } from 'wagmi'
import wagmiConfig from '../../wagmiConfig'

const meta: Meta<typeof About> = {
    title: 'Pages/About/About Page',
    component: About,
}

export default meta

type Story = StoryObj<typeof About>

export const Primary: Story = {
    render: () => (
        <WagmiConfig config={wagmiConfig}>
            <HashRouter>
                <Navbar />
                <About />
                <Footer />
            </HashRouter>
        </WagmiConfig>
    )
}
