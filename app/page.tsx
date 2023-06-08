import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover bg-homepage_bg"> 
            <div className="bg-black p-10 mt-20 rounded-xl flex-col items-center max-w-xl">
                <div className="mb-10 flex justify-center">
                    <Image 
                        src="/images/ethchi_banner.jpg" 
                        alt="ethchi banner" 
                        width={200} 
                        height={160}
                    />
                </div>
                <h2 className="text-xl text-white">Three days of building bridges between web3 builders, creators, traditional businesses, financial experts, and policymakers.</h2>
                <h1 className="text-3xl text-white text-center mt-10 font-bold">September 15-17, 2023</h1>
                <ul className="flex justify-center p-10">
                    <li> 
                        <HeroButton 
                            url="https://7tjiyjbn20b.typeform.com/ETHChicagoAtt" 
                            label="I want to attend"
                        />
                    </li>
                    <li> 
                        <HeroButton 
                            url="https://7tjiyjbn20b.typeform.com/ETHChicagoVol" 
                            label="I want to volunteer"
                        />
                    </li>
                    <li> 
                        <HeroButton 
                            url="https://7tjiyjbn20b.typeform.com/ETHChicagoPart" 
                            label="I want to partner"
                        />
                    </li>
                </ul>
            </div> 
        </div>
    )
}

interface IHeroButton {
    url: string,
    label: string
}
function HeroButton({ url, label }: IHeroButton) {
    return (
        <div className="flex ">
            <Link href={url} >
                <button className="w-32 text-white p-2 border border-white m-2 hover:bg-white hover:text-black font-bold">
                    {label}
                </button>
            </Link>
        </div>
    ) 
}
