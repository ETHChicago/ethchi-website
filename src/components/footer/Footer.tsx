import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import links from "../../utils/links"

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
                    <h3 className="font-mono font-bold">RESOURCES</h3>
                    <ul>
                        <a href={links.docs.intro}>
                            <li className="hover:underline opacity-40">Docs</li>
                        </a>
                        <a href={links.docs.builderResources}>
                            <li className="hover:underline opacity-40">Hacker Resources</li>
                        </a>
                        <a href={links.conference} target="_blank" rel="noreferrer" >
                            <li className="hover:underline opacity-40">Conference Home</li>
                        </a>
                        <a href={links.hackathon} target="_blank" rel="noreferrer" >
                            <li className="hover:underline opacity-40">Hackathon Home</li>
                        </a>
                        <a href={links.forum} target="_blank" rel="noreferrer" >
                            <li className="hover:underline opacity-40">Forum</li>
                        </a>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold font-mono">CONTRIBUTE</h3>
                    <ul>
                        <a href={links.forms.volunteerApp}>
                            <li className="hover:underline opacity-40">Volunteer Application</li>
                        </a>
                        <a href={links.forms.partnerApp}>
                            <li className="hover:underline opacity-40">Partnership Application</li>
                        </a>
                        <a href={links.forms.speakerApp} target="_blank" rel="noreferrer">
                            <li className="hover:underline opacity-40">Speaker Application</li>
                        </a>
                        <a href={links.forms.sideEventApp} target="_blank" rel="noreferrer">
                            <li className="hover:underline opacity-40">Side Event Submission</li>
                        </a>
                    </ul>
                </div>

                <div className="m-2 md:m-10">
                    <h3 className="font-bold">ATTEND</h3>
                    <ul>
                        <Link to={links.sitePaths.tickets}>
                            <li className="hover:underline opacity-40">Buy Tickets</li>
                        </Link>
                        <a href={links.forms.hackerApp}>
                            <li className="hover:underline opacity-40">Apply To Hack</li>
                        </a>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-row space-x-10 justify-center">
                        <a href={links.telegram} target="_blank" rel="noreferrer">
                            <FaTelegram size={40}/>
                        </a>
                        <a href={links.twitter} target="_blank" rel="noreferrer">
                            <FaTwitter size={40}/>
                        </a>
                        <a href={links.github} target="_blank" rel="noreferrer">
                            <FaGithub size={40}/>
                        </a>
                    </div>

                    <div className="mt-40">
                        <h3 className="text-center opacity-40">Created with by Chicagoans, for everyone.</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}
