import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import About from './About'

const meta: Meta<typeof About> = {
    title: 'Pages/About/About Page',
    component: About,
}

export default meta

type Story = StoryObj<typeof About>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <About />
        </HashRouter>
    )
}
