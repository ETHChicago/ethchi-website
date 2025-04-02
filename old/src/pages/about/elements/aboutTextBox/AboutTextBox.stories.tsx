import type { Meta, StoryObj } from '@storybook/react'
import { HashRouter} from 'react-router-dom'
import AboutTextBox from './AboutTextBox'

const meta: Meta<typeof AboutTextBox> = {
    title: 'Pages/About/Elements/About Text Box',
    component: AboutTextBox,
}

export default meta

type Story = StoryObj<typeof AboutTextBox>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <AboutTextBox />
        </HashRouter>
    )
}
