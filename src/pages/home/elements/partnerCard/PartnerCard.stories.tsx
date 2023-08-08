import type { Meta, StoryObj } from '@storybook/react'
import PartnerCard from './PartnerCard'
import links from '../../../../utils/links'

const meta: Meta<typeof PartnerCard> = {
    title: 'Pages/Home/Elements/Partner Card',
    component: PartnerCard,
}

export default meta

type Story = StoryObj<typeof PartnerCard>

export const Primary: Story = {
    render: () => (
        <PartnerCard logo="/images/logos/ARBITRUM.png" url="https://arbitrum.io/"/>
    )
}