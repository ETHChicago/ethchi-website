import type { Meta, StoryObj } from '@storybook/react'
import Accordion from './Accordion'

const meta: Meta<typeof Accordion> = {
    title: 'Components/Accordion',
    component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const Primary: Story = {
    render: () => (
        <Accordion label="Accordion Label">
            <p>Here is some content</p>
        </Accordion>
    )
}
     

