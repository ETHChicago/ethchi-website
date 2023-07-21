import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import TrackBox from './TrackBox'

const meta: Meta<typeof TrackBox> = {
    title: 'Components/TrackBox',
    component: TrackBox,
}

export default meta

type Story = StoryObj<typeof TrackBox>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <TrackBox trackName='Track Name' trackDescription={['bullet item 1', 'bullet item 2', 'buller item 3']} checkoutLink='' checkoutText='Checkout Text' />
        </HashRouter>
    )
}
