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
                        <h1 className="font-bold font-default text-5xl md:text-3xl text-primaryType">Details</h1><br></br>
                        <hr></hr><br></br>
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
                        <div className="p-4 pt-8 mb-4">
                        <h1 className="font-bold font-default text-5xl md:text-3xl text-primaryType">Travel Guide</h1><br></br>
                        <hr></hr><br></br>
                            <ul className="list-disc pl-4 mb-4">
 
                            If you're traveling from out of state, from abroad, or simply aiming to bypass traffic and parking costs, 
                            utilizing the CTA, Metra rail lines stands out as one of the swiftest and most economical means of commuting to and from the heart of Chicago, known as the Chicago Loop. 
                            The CTA network seamlessly links both O'Hare and Midway Airports to the city center. <br></br>
                            Most CTA terminals have automated ticket kiosks, but we highly recommend the Ventra app for purchasing transit passes:<br></br>
                            <li><a className="underline" href={links.ventraAppStore} target="_blank" rel="noreferrer">Ventra for iOS</a><br></br></li>
                            <li><a className="underline" href={links.ventraPlayStore} target="_blank" rel="noreferrer">Ventra for Android</a></li>


                            </ul>

                            <p className="font-bold mb-4">✈️ Arriving from O'Hare International Airport (CTA Blue Line)</p>

                            <ul className="list-disc pl-4 mb-4">

                                <HeroButton label="Get Directions from O'Hare Airport" url={links.mapsOhare} target="_blank" rel="nonreferernonreferrer"></HeroButton>


                            </ul>

                            <p className="font-bold mb-4">✈️ Arriving from Midway International Airport (CTA Orange Line)</p>
                            <ul className="list-disc pl-4 mb-4">
                                <HeroButton label="Get Directions from Midway Airport" url={links.mapsMidway} target="_blank" rel="nonreferernonreferrer"></HeroButton>

                            </ul>

                            <h1 className="font-bold font-default text-2xl md:text-2xl text-primaryType">🚗 Carpool</h1><br></br>
                            <ul className="list-disc pl-4">
                                If you are driving to the event or looking to carpool, we have a carpool telegram channel where you can orginize a ride with other attendees.
                                <HeroButton label="Join the ETH Chicago Carpool Telegram Channel" url={links.mapsOhare} target="_blank" rel="nonreferernonreferrer"></HeroButton><br></br>
                            </ul>
                            <h1 className="font-bold font-default text-2xl md:text-2xl text-primaryType">🚘 Parking</h1><br></br>
                            <ul className="list-disc pl-4">
                                <p>Self Parking is available at the Willis Tower</p>
                                <p>Additional parking is available nearby.<br></br> 
                                <li><a className="underline" href="https://goo.gl/maps/2MacVv3kadfuEcxQA" target="_blank" rel="noreferrer">211 W Adams St, Chicago, IL 60606</a><br></br></li>
                                <li><a className="underline" href="https://goo.gl/maps/fKDNoksfh7CseGWGA" target="_blank" rel="noreferrer">326 S Wells St, Chicago, IL 60606</a><br></br></li>
                                <br></br></p>
                                
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
