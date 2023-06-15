'use client'

import Link from "next/link";
import React, { ReactElement, useState } from 'react';
import Image from "next/image";

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="left-0 top-0 px-14 pl-2 z-10 ease-in duration-700">
            <div className="max-w-[1240px] flex justify-between items-center p-4">
                {/* logo */}
                <Link href="/">
                    <Image src="/images/ethchi_logo_light.png" alt="ethchi logo" width={80} height={80}/>
                </Link>
                {/* links */}
                <ul className="hidden sm:flex">
                    <li className="p-4 hover:underline">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="p-4 hover:underline">
                        <Link href="/about">Tickets</Link>
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Hackathon"
                            links={[
                                {   
                                    url: "", 
                                    label: "Hacker Manual"
                                },
                                {
                                    url: "",
                                    label: "Bounties"
                                },
                            ]}
                        />
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Conference"
                            links={[
                                {
                                    url: "",
                                    label: "Venue"
                                },
                                {   
                                    url: "", 
                                    label: "Schedule"
                                },
                                {   
                                    url: "", 
                                    label: "Event Map"
                                },
                            ]}
                        />
                    </li>
                    <li className="p-4">
                        <NavDropdown 
                            title="Contribute"
                            links={[
                                {   
                                    url: "https://7tjiyjbn20b.typeform.com/ETHChicagoAtt", 
                                    label: "Attend"
                                },
                                { 
                                    url: "https://7tjiyjbn20b.typeform.com/ETHChicagoVol", 
                                    label: "Volunteer"
                                },
                                {   url: "https://7tjiyjbn20b.typeform.com/ETHChicagoPart", 
                                    label: "Partner"
                                },
                                {
                                    url: "https://forum.ethchicago.xyz",
                                    label: "Forum"
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
