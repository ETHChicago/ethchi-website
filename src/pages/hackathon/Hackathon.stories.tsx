import type { Meta, StoryObj } from '@storybook/react'
import Hackathon from './Hackathon'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import { HashRouter } from 'react-router-dom';

const meta: Meta<typeof Hackathon> = {
    title: 'Pages/hackathon/Hackathon Page',
    component: Hackathon,
}

export default meta

type Story = StoryObj<typeof Hackathon>

export const Primary: Story = {
    render: () => (
      <HashRouter>
          <Navbar />
          <Hackathon />
          <Footer />
      </HashRouter>
    )
}
     

