import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import Tickets from './Tickets'

const meta: Meta<typeof Tickets> = {
    title: 'Pages/Tickets/Tickets Page',
    component: Tickets,
}

export default meta

type Story = StoryObj<typeof Tickets>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <Tickets />
        </HashRouter>
    )
}
