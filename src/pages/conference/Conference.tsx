import ConferenceHero from "./elements/ConferenceHero"
import HeroButton from "../../components/heroButton/HeroButton"
import links from "../../utils/links"

export default function Conference() {
    return (
        <div>
            <div className="bg-grid_bg_navy">
                <div className="p-8">
                    <p className="font-bold text-4xl text-primaryType">ETHCHICAGO CONFERENCE 2023</p>
                </div>

                <div className="text-sm lg:text-lg flex justify-evenly items-center bg-primaryBackground m-8 mt-4">
                    <HeroButton label="PURCHASE TICKETS" url={links.sitePaths.tickets} />
                    <HeroButton label="APPLY TO SPEAK" url="" />
                    <HeroButton label="BECOME A PARTNER" url="" />
                    <HeroButton label="HACKATHON HOME" url="" />
                </div>

                <div className="flex justify-center items-center">
                    <ConferenceHero />
                </div>

            </div>
        </div>
    )
}
