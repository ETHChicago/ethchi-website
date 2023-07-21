import type { Meta, StoryObj } from '@storybook/react'
import HeroBox from './HeroBox'
import { HashRouter} from 'react-router-dom'

const meta: Meta<typeof HeroBox> = {
    title: 'Components/HeroBox',
    component: HeroBox,
}

export default meta

type Story = StoryObj<typeof HeroBox>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <HeroBox />
        </HashRouter>
    )
}
     

