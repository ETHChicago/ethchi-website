import type { Meta, StoryObj } from '@storybook/react'
import TeamContainer from './TeamContainer'
import { HashRouter} from 'react-router-dom'

const meta: Meta<typeof TeamContainer> = {
    title: 'Components/TeamContainer',
    component: TeamContainer,
}

export default meta

type Story = StoryObj<typeof TeamContainer>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <TeamContainer />
        </HashRouter>
    )
}
     