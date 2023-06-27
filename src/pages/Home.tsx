import HeroBox from "../components/HeroBox";
import SponsorContainer from "../components/SponsorContainer";

export default function Home() {
    return (
        <div className="flex justify-center items-center bg-fixed bg-center bg-cover bg-homepage_bg"> 

            <div className="p-5 w-full md:m-40 space-y-20 flex flex-col items-center">
                <div className="m-20">
                    <HeroBox />
                </div>
                <div className="flex flex-col justify-center w-screen md:w-full rounded-xl"> 
                    <SponsorContainer />
                </div>
            </div>


        </div>
    )
}
