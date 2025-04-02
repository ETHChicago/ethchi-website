import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'
import { HashRouter} from 'react-router-dom'

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
}

export default meta

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
    render: () => (
        <HashRouter>
            <Footer />
        </HashRouter>
    )
}
