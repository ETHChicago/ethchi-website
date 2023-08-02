import HeroBox from "../../components/heroBox/HeroBox";
import SponsorContainer from "../../components/sponsorContainer/SponsorContainer";
import VennityMap from "../../components/vennityMap/VennityMap";

export default function Home() {
    return (
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover bg-homepage_bg"> 

            <div className="p-5 w-full md:m-40 space-y-20 flex flex-col items-center">
                <div className="m-10">
                    <HeroBox />
                </div>
                <div className="flex flex-col justify-center w-screen"> 
                    <SponsorContainer />
                </div>
                <div className="mb-10">
                    <VennityMap />
                </div>
            </div>


        </div>
    )
}
