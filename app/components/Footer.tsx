import Image from "next/image"
import Link from "next/link"
import { FaTelegram, FaTwitter } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="bg-black text-white p-5">

            <div className="m-10 flex flex-row justify-between">

                <div className="m-5">
                    <Image 
                        src="/images/ethchi_logo_vertical_white.png"
                        alt="ethchi logo"
                        width={200}
                        height={200}
                    />
                </div>

                <div className="m-10">
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

                <div className="m-10">
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

                <div className="m-10">
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
            </div>

            <div className="m-10">
                <h3 className="text-center">Created by Chicagoans, for everyone.</h3>
            </div>
        </div>
    )
}
