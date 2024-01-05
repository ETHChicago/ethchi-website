import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import Community from './Community'

const meta: Meta<typeof Community> = {
    title: 'Pages/Community/Community Page',
    component: Community,
}

export default meta

type Story = StoryObj<typeof Community>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <Community />
        </HashRouter>
    )
}
