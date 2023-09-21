import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"
import links from "../../data/links"

export default function Footer() {
    return (
        <div className="p-5 max-w-screen bg-primaryBackground text-primaryType">

            <div className="md:m-10 flex justify-center md:justify-between text-xs">

                <div className="m-5 w-64">
                    <img 
                        src="/images/brand/ethchi_logo_vertical_white.png"
                        alt="ethchi logo"
                        width={200}
                        height={200}
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
                        <Link to={links.sitePaths.conference} >
                            <li className="hover:underline opacity-40">Conference Home</li>
                        </Link>
                        <a href={links.taikaiHome} target="_blank" rel="noreferrer" >
                            <li className="hover:underline opacity-40">Hackathon Home</li>
                        </a>
                        <a href={links.forum} target="_blank" rel="noreferrer" >
                            <li className="hover:underline opacity-40">Forum</li>
                        </a>
                        <a href={links.pretalx_schedule} target="_blank" rel="noreferrer" >
                            <li className="hover:underline opacity-40">Schedule</li>
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


            </div>

            <div className="flex flex-col text-sm">
                <div className="flex flex-row space-x-10 justify-center mt-10">
                    <a href={links.telegram} target="_blank" rel="noreferrer">
                        <FaTelegram size={30}/>
                    </a>
                    <a href={links.twitter} target="_blank" rel="noreferrer">
                        <FaTwitter size={30}/>
                    </a>
                    <a href={links.github} target="_blank" rel="noreferrer">
                        <FaGithub size={30}/>
                    </a>
                    <a href={links.mirror} target="_blank" rel="noreferrer">
                        <img    
                            src="/images/icons/mirror-icon.png"
                            alt="mirror icon"
                            width={22}
                            height={20}
                        />
                    </a>
                </div>

                <div className="mt-14">
                    <h3 className="text-center opacity-40">Created with ❤️  by Chicagoans, for everyone.</h3>
                </div>
            </div>

        </div>
    )
}
