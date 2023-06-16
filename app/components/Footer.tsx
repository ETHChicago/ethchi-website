import Image from "next/image"
import Link from "next/link"
import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="bg-black text-white p-5">

            <div className="md:m-10 flex flex-col md:flex-row justify-center md:justify-between">

                <div className="m-5">
                    <Image 
                        src="/images/ethchi_logo_vertical_white.png"
                        alt="ethchi logo"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Info</h3>
                    <ul>
                        <Link href="">
                            <li className="hover:underline">FAQ</li>
                        </Link>
                        <Link href="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/">
                            <li className="hover:underline">Docs</li>
                        </Link>
                        <Link href="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/">
                            <li className="hover:underline">Hacker Resources</li>
                        </Link>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Contribute</h3>
                    <ul>
                        <Link href="https://7tjiyjbn20b.typeform.com/ETHChicagoVol">
                            <li className="hover:underline">Volunteer Form</li>
                        </Link>
                        <Link href="https://7tjiyjbn20b.typeform.com/ETHChicagoPart">
                            <li className="hover:underline">Partnership Form</li>
                        </Link>
                        <Link href="https://forum.ethchicago.xyz/">
                            <li className="hover:underline">Forum</li>
                        </Link>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">extra links</h3>
                    <ul>
                        <Link href="">
                            <li className="hover:underline">link1</li>
                        </Link>
                        <Link href="">
                            <li className="hover:underline">link1</li>
                        </Link>
                        <Link href="">
                            <li className="hover:underline">link1</li>
                        </Link>
                        <Link href="">
                            <li className="hover:underline">link1</li>
                        </Link>
                    </ul>
                </div>

            </div>

            <div className="flex flex-row space-x-10 justify-center">
                <FaTelegram size={40}/>
                <FaTwitter size={40}/>
                <FaGithub size={40}/>
            </div>

            <div className="m-10">
                <h3 className="text-center">Created by Chicagoans, for everyone.</h3>
            </div>
        </div>
    )
}
