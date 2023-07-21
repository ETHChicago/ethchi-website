import type { Meta, StoryObj } from '@storybook/react'
import Footer from './Footer'
import { HashRouter, Routes, Route } from 'react-router-dom'
import links from '../../utils/links'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Tickets from '../../pages/Tickets'
import ComingSoon from '../../pages/ComingSoon'

const meta: Meta<typeof Footer> = {
    title: 'Layout/Footer',
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