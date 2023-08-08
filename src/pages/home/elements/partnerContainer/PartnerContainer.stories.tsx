import type { Meta, StoryObj } from '@storybook/react'
import PartnerContainer from './PartnerContainer'

const meta: Meta<typeof PartnerContainer> = {
    title: 'Pages/Home/Elements/Partner Container',
    component: PartnerContainer,
}

export default meta

type Story = StoryObj<typeof PartnerContainer>

export const Primary: Story = {
    render: () => (
        <PartnerContainer />
    )
}
     