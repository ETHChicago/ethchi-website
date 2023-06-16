import HeroBox from "./components/HeroBox";
import SponsorCard from "./components/SponsorCard";
import HeroButton from "./components/HeroButton";

export default function Home() {
    return (
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover bg-homepage_bg"> 

            <div className="p-5 m-40 space-y-20 flex flex-col items-center">
                <div className="my-40">
                    <HeroBox />
                </div>
                <div className="flex flex-col justify-center bg-black w-full rounded-xl"> 
                    <h1 className="text-3xl text-white text-center mt-5 font-bold">Sponsors</h1>
                    <div className="grid grid-cols-3">
                        <div className="flex justify-center">
                            <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        </div>
                        <div className="flex justify-center">
                            <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        </div>
                        <div className="flex justify-center">
                            <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        </div>
                        <div className="flex justify-center">
                            <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        </div>
                        <div className="flex justify-center">
                            <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        </div>
                        <div className="flex justify-center">
                            <SponsorCard logo="/images/arbitrum-logo.svg" label="Arbitrum"/>
                        </div>
                    </div>
                    <div className="flex justify-center m-5">
                        <HeroButton url="https://7tjiyjbn20b.typeform.com/ETHChicagoPart" label="become a partner"/>
                    </div>
                </div>
            </div>


        </div>
    )
}
