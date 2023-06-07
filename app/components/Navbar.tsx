import Link from "next/link";
import React from 'react';

// TODO: mobile menu

export default function Navbar() {
    return (
        <div className="fixed left-0 top-0 w-full z-10 ease-in duration-300">
            <div className="max-w-[1240px] m-auto flex justify-between items-center p-4">
                <Link href='/'>
                    <h1 className="text-3xl font-bold">ETH Chicago</h1>
                </Link>
                <ul className="hidden sm:flex">
                    <li className="p-4">
                        <Link href='/'>Home</Link>
                    </li>
                    <li className="p-4">
                        <Link href='/'>Forum</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

