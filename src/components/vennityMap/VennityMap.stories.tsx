import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import VennityMap from './VennityMap'

const meta: Meta<typeof VennityMap> = {
    title: 'Components/VennityMap',
    component: VennityMap,
}

export default meta

type Story = StoryObj<typeof VennityMap>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <VennityMap />
        </HashRouter>
    )
}

