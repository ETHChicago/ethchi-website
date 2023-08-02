import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import Home from './Home'

const meta: Meta<typeof Home> = {
    title: 'Pages/Home/Home Page',
    component: Home,
}

export default meta

type Story = StoryObj<typeof Home>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <Home />
        </HashRouter>
    )
}
