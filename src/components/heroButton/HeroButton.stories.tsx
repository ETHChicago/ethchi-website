import type { Meta, StoryObj } from '@storybook/react'
import HeroButton from './HeroButton'
import { HashRouter} from 'react-router-dom'

const meta: Meta<typeof HeroButton> = {
    title: 'Components/HeroButton',
    component: HeroButton,
}

export default meta

type Story = StoryObj<typeof HeroButton>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <HeroButton url="url" label="label" target="target"/>
        </HashRouter>
    )
}
     

