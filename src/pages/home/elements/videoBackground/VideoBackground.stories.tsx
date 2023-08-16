import type { Meta, StoryObj } from '@storybook/react'
import VideoBackground from './VideoBackground'

const meta: Meta<typeof VideoBackground> = {
    title: 'Pages/Home/Elements/Video Background',
    component: VideoBackground,
}

export default meta

type Story = StoryObj<typeof VideoBackground>

export const Primary: Story = {
    render: () => (
        <VideoBackground />
    )
}
