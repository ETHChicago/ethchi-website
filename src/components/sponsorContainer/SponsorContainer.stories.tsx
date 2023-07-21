import type { Meta, StoryObj } from '@storybook/react'
import SponsorContainer from './SponsorContainer'
import { HashRouter} from 'react-router-dom'

const meta: Meta<typeof SponsorContainer> = {
    title: 'Components/SponsorContainer',
    component: SponsorContainer,
}

export default meta

type Story = StoryObj<typeof SponsorContainer>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <SponsorContainer />
        </HashRouter>
    )
}
     