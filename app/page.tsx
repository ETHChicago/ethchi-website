import VennityMap from "./components/VennityMap";
import HeroBox from "./components/HeroBox";

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen bg-fixed bg-center bg-cover bg-homepage_bg"> 

            <div className="p-5 space-y-20 flex flex-col items-center">
                <HeroBox />
                <VennityMap />
            </div>

        </div>
    )
}
