import React, { ReactElement, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

// TODO: mobile menu

export default function Navbar() {
    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <div className="left-0 top-0 pl-2 w-full ease-in duration-400 bg-black text-white">
            <div className="flex justify-between items-center p-5">
                {/* logo */}
                <div className="z-10" onClick={() => setMobileMenu(false)}>
                    <a href="/">
                        <img src="/images/ethchi_logo_black.jpg" alt="ethchi logo" width={80} height={100}/>
                    </a>
                </div>

                {/* desktop links */}
                <div className="hidden md:block">
                    <ul className="flex justify-end text-md">
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="/tickets">Tickets</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="https://forum.ethchicago.xyz">Forum</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="/coming-soon">Hackathon</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="/coming-soon">Conference</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="https://app.vennity.co/verses/ethchicago/map" target="_blank">Event Map</Link>
                        </li>
                        <li className="hover:underline mx-4 ease-in duration-100">
                            <Link to="https://docs.ethchicago.xyz/docs/intro">Docs</Link>
                        </li>
                    </ul>
                </div>
                {/* mobile button */}
                <div onClick={toggleMobileMenu} className="block z-10 md:hidden">
                    {mobileMenu ? <AiOutlineClose size={40} /> : <CiMenuBurger size={40} />}
                </div>
                {/* mobile menu */}
                <div className={
                    mobileMenu
                        ? "md:hidden bg-black absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300"
                        : "hidden"
                    }
                    onClick={() => setMobileMenu(false)}
                >
                    <ul className="flex flex-col justify-end text-xl">
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="/about">About</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="/tickets">Tickets</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="https://forum.ethchicago.xyz">Forum</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="/coming-soon">Hackathon</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="/coming-soon">Conference</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="https://app.vennity.co/verses/ethchicago/map" target="_blank">Event Map</Link>
                        </li>
                        <li className="hover:underline p-4 ease-in duration-100">
                            <Link to="https://docs.ethchicago.xyz/docs/intro">Docs</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

