import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import ComingSoon from './ComingSoon'

const meta: Meta<typeof ComingSoon> = {
    title: 'Pages/Coming Soon/Coming Soon Page',
    component: ComingSoon,
}

export default meta

type Story = StoryObj<typeof ComingSoon>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <ComingSoon />
        </HashRouter>
    )
}
