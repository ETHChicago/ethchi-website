import HeroBox from "./components/HeroBox";
import SponsorCard from "./components/SponsorCard";
import HeroButton from "./components/HeroButton";

export default function Home() {
    return (
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover bg-homepage_bg"> 

            <div className="p-5 w-screen m-20 md:m-40 space-y-20 flex flex-col items-center">
                <div className="my-20">
                    <HeroBox />
                </div>
                <div className="flex flex-col justify-center w-screen md:w-full rounded-xl"> 
                    <div className="grid grid-flow-row">
                        <div className="flex flex-row flex-wrap justify-center">
                            <SponsorCard logo="/images/arbitrum-foundation-logo.svg" />
                            <SponsorCard logo="/images/arbitrum-foundation-logo.svg" />
                            <SponsorCard logo="/images/arbitrum-foundation-logo.svg" />
                            <SponsorCard logo="/images/arbitrum-foundation-logo.svg" />
                            <SponsorCard logo="/images/arbitrum-foundation-logo.svg" />
                            <SponsorCard logo="/images/arbitrum-foundation-logo.svg" />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
