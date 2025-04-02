import type { Meta, StoryObj } from '@storybook/react'
import Winners from './Winners'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { HashRouter } from 'react-router-dom';
//import { WagmiConfig } from 'wagmi';
//import wagmiConfig from '../../wagmiConfig';

const meta: Meta<typeof Winners> = {
    title: 'Pages/hackathon/Winners Page',
    component: Winners,
}

export default meta

type Story = StoryObj<typeof Winners>

export const Primary: Story = {

    render: () => (
            <HashRouter>
                <Navbar />
                <Winners />
                <Footer />
            </HashRouter>
    )
/*
    render: () => (
        <WagmiConfig config={wagmiConfig} >
            <HashRouter>
                <Navbar />
                <Winners />
                <Footer />
            </HashRouter>
        </WagmiConfig>
    )
*/
}
     

