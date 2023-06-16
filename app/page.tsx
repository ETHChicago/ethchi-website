import HeroBox from "./components/HeroBox";
import SponsorCard from "./components/SponsorCard";

export default function Home() {
    return (
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover bg-homepage_bg"> 

            <div className="p-5 space-y-20 flex flex-col items-center">
                <div className="my-40">
                    <HeroBox />
                </div>
                <div className="bg-black w-full rounded-xl"> 
                    <h1 className="text-3xl text-white text-center mt-5 font-bold">Sponsors</h1>
                    <div className="grid grid-cols-3">
                        <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                    </div>
                </div>
            </div>


        </div>
    )
}
