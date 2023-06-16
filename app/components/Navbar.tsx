'use client'

import Link from "next/link";
import React, { ReactElement, useState } from 'react';
import Image from "next/image";

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="left-0 top-0 pl-2 w-full ease-in duration-400">
            <div className="flex justify-between items-center mx-10">
                {/* logo */}
                <Link href="/">
                    <Image src="/images/ethchi_logo_light.png" alt="ethchi logo" width={80} height={80}/>
                </Link>
                {/* links */}
                <ul className="flex justify-end">
                    <li className="hover:underline mx-4">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/hackathon">Hackathon</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/conference">Conference</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="/venue">Venue</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="https://app.dev.vennity.co/verses/eth-chicago-2023/map">Event Map</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3">Tickets</Link>
                    </li>
                    <li className="hover:underline mx-4">
                        <Link href="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/contributing">Contribute</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

