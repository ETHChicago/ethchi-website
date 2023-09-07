import HeroButton from "../../components/heroButton/HeroButton"
import links from "../../data/links"

export default function Conference() {
    return (
        <div>
            <div className="bg-grid_bg_navy">
                <div className="p-8">
                    <h1 className="font-bold font-default text-5xl md:text-6xl text-primaryType">ETHCHICAGO 2023 CONFERENCE</h1>
                </div>

                <div className="hidden lg:flex text-sm md:text-md lg:flex-row justify-evenly items-center bg-primaryBackground m-8 mt-4">
                    <HeroButton label="PURCHASE TICKETS" url={links.sitePaths.tickets} />
                    <HeroButton label="APPLY TO SPEAK" url={links.forms.speakerApp} target="_blank" rel="noreferrer" />
                    <HeroButton label="BECOME A PARTNER" url={links.forms.partnerApp} target="_blank" rel="noreferrer" />
                    <HeroButton label="HACKATHON HOME" url={links.taikaiHome} target="_blank" rel="noreferrer" />
                </div>
                <div className="flex lg:hidden flex-col md:flex-row justify-evenly items-center bg-primaryBackground m-8 mt-4">
                    <div>
                        <HeroButton label="PURCHASE TICKETS" url={links.sitePaths.tickets} />
                        <HeroButton label="APPLY TO SPEAK" url={links.forms.speakerApp} target="_blank" rel="noreferrer" />
                    </div>
                    <div>
                        <HeroButton label="BECOME A PARTNER" url={links.forms.partnerApp} target="_blank" rel="noreferrer" />
                        <HeroButton label="HACKATHON HOME" url={links.taikaiHome} target="_blank" rel="noreferrer" />
                    </div>
                </div>

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
                            While this isn't a strict bounty rule, we encourage bounties relating back to showing demonstratable impace in the Chicago community
                        </div>
                        <div className="p-4 pt-8">
                            <p className="font-bold mb-4">TRAVEL GUIDE:</p>
                            <ul className="list-disc pl-4 mb-4">

                                Chicago has a very robust public transit system called CTA (Chicago Transit Authority). If you are coming from out of state or from abroad, using the CTA rail lines are some of the quickest ways to get to the Chicago Loop as they are connected to both airports.

                            </ul>

                            <p className="font-bold mb-4">Arriving from O'Hare International Airport:</p>
                            <ul className="list-disc pl-4 mb-4">
                                <li>
                                    O'Hare Airport is connected to the CTA Blue Line. Take the Blue Line to the Monroe stop. <a className="underline" href={links.mapsOhare} target="_blank" rel="noreferrer">Directions from O'Hare Airport to Willis Tower</a>
                                </li>

                            </ul>

                            <p className="font-bold mb-4">Arriving from Midway International Airport:</p>
                            <ul className="list-disc pl-4">
                                <li>
                                    Midway Airport is connected to the CTA Orange Line. Board the Orange Line at Midway and exit at Quincy. <a className="underline" href={links.mapsMidway} target="_blank" rel="noreferrer">Directions from Midway Airport to Willis Tower</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
