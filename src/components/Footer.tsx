import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import links from "../common/links"

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
                        <a href={links.docs.intro}>
                            <li className="hover:underline">Docs</li>
                        </a>
                        <a href={links.docs.builderResources}>
                            <li className="hover:underline">Hacker Resources</li>
                        </a>
                        <a href={links.conference} target="_blank" rel="noreferrer" >
                            <li className="hover:underline">Conference Home</li>
                        </a>
                        <a href={links.hackathon} target="_blank" rel="noreferrer" >
                            <li className="hover:underline">Hackathon Home</li>
                        </a>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Attend</h3>
                    <ul>
                        <Link to={links.sitePaths.tickets}>
                            <li className="hover:underline">Buy Tickets</li>
                        </Link>
                        <a href={links.forms.hackerApp}>
                            <li className="hover:underline">Hacker Application</li>
                        </a>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">Contribute</h3>
                    <ul>
                        <a href={links.forms.volunteerApp}>
                            <li className="hover:underline">Volunteer Form</li>
                        </a>
                        <a href={links.forms.partnerApp}>
                            <li className="hover:underline">Partnership Form</li>
                        </a>
                        <a href={links.forum} target="_blank" rel="noreferrer" >
                            <li className="hover:underline">Forum</li>
                        </a>
                    </ul>
                </div>

            </div>

            <div className="flex flex-row space-x-10 justify-center">
                <FaTelegram size={40}/>
                <a href={links.twitter}>
                    <FaTwitter size={40}/>
                </a>
                <a href={links.github}>
                    <FaGithub size={40}/>
                </a>
            </div>

            <div className="m-10">
                <h3 className="text-center">Created by Chicagoans, for everyone.</h3>
            </div>
        </div>
    )
}
