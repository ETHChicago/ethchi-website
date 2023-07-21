import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import CoreTeamCard from './CoreTeamCard'
import links from '../../utils/links'

const meta: Meta<typeof CoreTeamCard> = {
    title: 'Components/CoreTeamCard',
    component: CoreTeamCard,
}

export default meta

type Story = StoryObj<typeof CoreTeamCard>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <CoreTeamCard name='firstname lastname' title='super cool title' img={links.images.ethChiLogo}/>
        </HashRouter>
    )
}

