'use client'

import Link from "next/link";
import React, { ReactElement, useState } from 'react';
import Image from "next/image";

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="left-0 top-0 pl-2 z-10 w-full ease-in duration-400">
            <div className="flex p-4 justify-between items-center mx-20">
                {/* logo */}
                <Link href="/">
                    <Image src="/images/ethchi_logo_light.png" alt="ethchi logo" width={80} height={80}/>
                </Link>
                {/* links */}
                <ul className="flex text-2xl justify-end">
                    <li className="hover:underline mx-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Tickets</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Hackathon</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Conference</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/">Event Map</Link>
                    </li>
                    <li className="mx-3">
                        <NavDropdown 
                            title="Contribute"
                            links={[
                                {
                                    url: "https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/contributing",
                                    label: "How to Contribute"
                                },
                                {
                                    url: "https://forum.ethchicago.xyz",
                                    label: "Volunteer Form"
                                },
                                {
                                    url: "https://forum.ethchicago.xyz",
                                    label: "Partnership Form"
                                },
                                {
                                    url: "https://forum.ethchicago.xyz",
                                    label: "Discourse"
                                }
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
