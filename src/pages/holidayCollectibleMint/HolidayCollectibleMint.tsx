import CollectibleMintButton from "../../components/CollectibleMintButton/CollectibleMintButton"
import links from "../../data/links"

export default function HolidayCollectibleMint() {

    return (
        <div className="bg-holiday_bg bg-cover bg-no-repeat  min-h-[1200px] flex flex-col justify-center items-center">

            <div className="w-4/5 h-4/5 md:w-1/3 md:h-1/3 flex flex-col justify-center items-center p-10 m-10 bg-primaryBackground shadow-xl rounded-xl">
                <video autoPlay loop src={links.holidayCollectible} />
                <div className="flex flex-col text-center p-4">
                    <a className="text-white text-xl hover:underline" href="https://www.twinrafters.com/">Art: Twinrafters</a>
                    <a className="text-white text-xl hover:underline" href="https://www.cullah.com/">Music: Cullah</a>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center p-10">
                <CollectibleMintButton />
            </div>
            
        </div>
    )
}
