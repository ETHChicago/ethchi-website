import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="bg-black text-white p-5 max-w-screen">

            <div className="md:m-10 flex flex-col md:flex-row justify-center md:justify-between">

                <div className="m-5">
                    <img 
                        src="/images/ethchi_logo_vertical_white.png"
                        alt="ethchi logo"
                        width={200}
                    />
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Info</h3>
                    <ul>
                        <a href="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/">
                            <li className="hover:underline">FAQ</li>
                        </a>
                        <a href="https://docs.ethchicago.xyz/docs/intro/">
                            <li className="hover:underline">Docs</li>
                        </a>
                        <a href="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/">
                            <li className="hover:underline">Hacker Resources</li>
                        </a>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Contribute</h3>
                    <ul>
                        <a href="https://7tjiyjbn20b.typeform.com/ETHChicagoVol">
                            <li className="hover:underline">Volunteer Form</li>
                        </a>
                        <a href="https://7tjiyjbn20b.typeform.com/ETHChicagoPart">
                            <li className="hover:underline">Partnership Form</li>
                        </a>
                        <a href="https://forum.ethchicago.xyz/">
                            <li className="hover:underline">Forum</li>
                        </a>
                    </ul>
                </div>

            </div>

            <div className="flex flex-row space-x-10 justify-center">
                <FaTelegram size={40}/>
                <a href="https://twitter.com/0xethchicago">
                    <FaTwitter size={40}/>
                </a>
                <a href="https://github.com/ETHChicago">
                    <FaGithub size={40}/>
                </a>
            </div>

            <div className="m-10">
                <h3 className="text-center">Created by Chicagoans, for everyone.</h3>
            </div>
        </div>
    )
}
