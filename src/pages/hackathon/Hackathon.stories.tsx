import type { Meta, StoryObj } from '@storybook/react'
import { WagmiConfig } from 'wagmi'
import { wagmiConfig } from '../../config/wagmiConfig'
import Hackathon from './Hackathon'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { HashRouter } from 'react-router-dom';

const meta: Meta<typeof Hackathon> = {
    title: 'Pages/Hackathon',
    component: Hackathon,
}

export default meta

type Story = StoryObj<typeof Hackathon>

export const Primary: Story = {
    render: () => (
      <HashRouter>
        <WagmiConfig config={wagmiConfig} >
          <Navbar />
          <Hackathon />
          <Footer />
        </WagmiConfig>
      </HashRouter>
    )
}
     

