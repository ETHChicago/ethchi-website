'use client'

import Link from "next/link";
import React, { ReactElement, useState } from 'react';
import Image from "next/image";

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="fixed left-0 top-0 w-full px-14 pl-2 z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href="/">
                    <Image src="/images/ethchi_logo_light.png" alt="ethchi logo" width={120} height={120}/>
                </Link>
                <ul className="hidden sm:flex">
                    <li className="p-4 hover:underline">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="p-4 hover:underline">
                        <Link href="https://forum.ethchicago.xyz">Forum</Link>
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Contribute"
                            links={[
                                { url: "https://7tjiyjbn20b.typeform.com/ETHChicagoAtt", label: "Attend"},
                                { url: "https://7tjiyjbn20b.typeform.com/ETHChicagoVol", label: "Volunteer"},
                                { url: "https://7tjiyjbn20b.typeform.com/ETHChicagoPart", label: "Partner"},
                            ]}
                        />
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Info"
                            links={[
                                { url: "/", label: "Calendar"},
                                { url: "https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3", label: "Get Tickets"},
                                { url: "https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/contributing", label: "Docs"},
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
                className="hover:underline"
            >
                {title}
            </button>
            {isOpen && (
                <ul className="absolute flex-col text-left">
                    {links.map((link, index) => (
                        <li className="mt-4 relative">
                            <Link 
                                key={index} 
                                href={link.url}
                                className="hover:underline"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
