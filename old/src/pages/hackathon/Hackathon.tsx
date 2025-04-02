import HeroButton from "../../components/heroButton/HeroButton"
import links from "../../data/links"

export default function Hackathon() {
    return (
        <div>
            <div className="bg-grid_bg_navy">
                <div className="p-8">
                    <p className="font-bold text-5xl md:text-6xl text-primaryType">BUILD & CREATE</p>
                </div>

                <div className="bg-primaryBackground m-8 mt-2 flex flex-wrap justify-evenly gap-2">
                    <HeroButton label="HACKATHON HOME" url={links.taikaiHome} target="_blank" rel="noreferrer"/>
                    <HeroButton label="APPLY TO HACK" url={links.forms.hackerApp} target="_blank" rel="noreferrer" />
                    <HeroButton label="HOST A WORKSHOP" url={links.forms.speakerApp} target="_blank" rel="noreferrer" />
                    <HeroButton label="SUBMIT YOUR PROJECT" url={links.taikaiHome} target="_blank" rel="noreferrer" />
                    <HeroButton label="HACKATHON WINNERS" url={links.sitePaths.winners} target="_blank" rel="noreferrer" />
                </div>
                {/* <div className="hidden lg:flex text-sm lg:flex-row justify-evenly items-center bg-primaryBackground m-8 mt-4">
             
                </div>
                <div className="flex lg:hidden flex-col md:flex-row justify-evenly items-center bg-primaryBackground m-8 mt-4">
                    <div>
                        <HeroButton label="HACKATHON HOME" url={links.taikaiHome} target="_blank" rel="noreferrer"/>
                        <HeroButton label="APPLY TO HACK" url={links.forms.hackerApp} target="_blank" rel="noreferrer" />
                    </div>
                    <div>
                        <HeroButton label="HOST A WORKSHOP" url={links.forms.speakerApp} target="_blank" rel="noreferrer" />
                        <HeroButton label="SUBMIT YOUR PROJECT" url={links.taikaiHome} target="_blank" rel="noreferrer" />
                    </div>
                </div> */}

                <div className="flex justify-center items-center p-8">
                    <div className="flex flex-col text-primaryType bg-primaryBackground">
                        <div className="p-4 pt-8">
                            <p className="font-bold inline">DATES: </p>
                            Fri 09/15, Sat 09/16, Sun 09/17
                        </div>
                        <div className="p-4 pt-8">
                            <p className="font-bold inline">LOCATION: </p>
                            <p className="inline">
                                <a className="underline" href={links.metClubWebsite} target="_blank" rel="noreferrer">The M Club </a>
                                - Willis Tower,{' '}  
                                <a className="underline" href={links.metClubGoogleMaps} target="_blank" rel="noreferrer">233 S Wacker Dr, Chicago, IL, 60606 </a>
                                Floors 66 & 67
                            </p>
                        </div>
                        <div className="p-4 pt-8">
                            <p className="font-bold inline">EVENT SPACE: </p>
                            Conference attendees will have access to the 67th floor on Saturday evening as well as full access to the event across both the 66 and 67 floors throughout the day on Sunday.
                        </div>
                        <div className="p-4 pt-8">
                            <p className="font-bold inline">EVENT DESCRIPTION: </p>
                            The ETHChicago Hackathon is a three-day builder and creative IRL event where participants compete to win bounties sponsored by our partners. Bounties consist of tying together new technology in the blockchain space, innovating and learning from each other about existing blockchain tools, or solving real-world use cases with the unique properties of decentralized technology.
                        </div>
                        <div className="p-4 pt-8">
                            While this isn't a strict bounty rule, we encourage bounties relating back to showing demonstrable impact in the Chicago community
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
