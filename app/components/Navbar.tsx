'use client'

import Link from "next/link";
import React, { ReactElement, useState } from 'react';

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="fixed left-0 top-0 w-full pr-20 z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href='/'>
                    <h1 className="text-3xl font-bold">ETH Chicago</h1>
                </Link>
                <ul className="hidden sm:flex">
                    <li className="p-4">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4">
                        <Link href="https://forum.ethchicago.xyz">Forum</Link>
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Contribute"
                            links={[
                                { url: "/", label: "Attend"},
                                { url: "/", label: "Volunteer"},
                                { url: "/", label: "Partner"},
                            ]}
                        />
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Info"
                            links={[
                                { url: "/", label: "Calendar"},
                                { url: "/", label: "Tickets"},
                                { url: "/", label: "Docs"},
                            ]}
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}

interface INavDropdown {
    title: string,
    links: {
        url: string
        label: string
    }[]
}
function NavDropdown({ title, links }: INavDropdown) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
            >
                {title}
            </button>
            {isOpen && (
                <ul className="absolute flex-col float">
                    {links.map((link, index) => (
                        <li className="p-4 relative">
                            <Link key={index} href={link.url}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
