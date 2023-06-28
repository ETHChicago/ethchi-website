import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="p-5 max-w-screen bg-primaryBackground text-primaryType">

            <div className="md:m-10 flex flex-col md:flex-row justify-center md:justify-between">

                <div className="m-5">
                    <img 
                        src="/images/brand/ethchi_logo_vertical_white.png"
                        alt="ethchi logo"
                        width={200}
                    />
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Info</h3>
                    <ul>
                        <a href="https://docs.ethchicago.xyz/docs/intro/">
                            <li className="hover:underline">Docs</li>
                        </a>
                        <a href="https://docs.ethchicago.xyz/docs/builder-resources">
                            <li className="hover:underline">Hacker Resources</li>
                        </a>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Attend</h3>
                    <ul>
                        <Link to="/tickets">
                            <li className="hover:underline">Buy Tickets</li>
                        </Link>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScVY13enMhjz7PCwMluFpGcvGaU5E9qPHIgF60cUE5X_m8Uaw/viewform">
                            <li className="hover:underline">Hacker Application</li>
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
