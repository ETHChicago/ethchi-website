import type { Meta, StoryObj } from '@storybook/react'
import Navbar from './Navbar'
import { HashRouter } from 'react-router-dom'

const meta: Meta<typeof Navbar> = {
    title: 'Components/Navbar',
    component: Navbar,
}

export default meta 

type Story = StoryObj<typeof Navbar>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <Navbar />
        </HashRouter>
    )
}