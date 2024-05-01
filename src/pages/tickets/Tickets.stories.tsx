import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import Tickets from './Tickets'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
//import { WagmiConfig } from 'wagmi'
//import wagmiConfig from '../../wagmiConfig'

const meta: Meta<typeof Tickets> = {
    title: 'Pages/Tickets/Tickets Page',
    component: Tickets,
}

export default meta

type Story = StoryObj<typeof Tickets>

export const Primary: Story = {

    render: () => (
        <HashRouter>
            <Navbar />
            <Tickets />
            <Footer />
        </HashRouter>
    )
/*
    render: () => (
        <HashRouter>
            <WagmiConfig config={wagmiConfig} >
                <Navbar />
                <Tickets />
                <Footer />
            </WagmiConfig>
        </HashRouter>
    )
    */
}
