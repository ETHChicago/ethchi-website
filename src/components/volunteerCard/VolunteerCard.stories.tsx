import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import VolunteerCard from './VolunteerCard'
import links from '../../utils/links'

const meta: Meta<typeof VolunteerCard> = {
    title: 'Components/VolunteerCard',
    component: VolunteerCard,
}

export default meta

type Story = StoryObj<typeof VolunteerCard>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <VolunteerCard name='firstname lastname' company='super cool company' />
        </HashRouter>
    )
}

