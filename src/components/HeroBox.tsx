import HeroButton from "./HeroButton"

export default function HeroBox() {
    return (
            <div className="bg-primaryBackground text-primaryType p-10 rounded-xl items-center w-full shadow-2xl outline outline-1">
                <div className="mb-10 flex justify-center">
                    <img 
                        src="/images/brand/ethchi_banner.svg" 
                        alt="ethchi banner" 
                        width={250} 
                        height={160}
                        className="hidden md:block"
                    />
                    <img
                        src="/images/brand/ethchi_banner.svg" 
                        alt="ethchi banner" 
                        width={200} 
                        height={160}
                        className="md:hidden block"
                    />
                </div>
                <h2 className="text-xl text-white">
                    Three days of building bridges between web3 builders, creators, traditional businesses, financial experts, and policymakers.
                </h2>
                <h1 className="text-3xl text-white text-center mt-10 font-bold">September 15-17, 2023</h1>
                <div>
                    <ul className="flex flex-col md:flex-row justify-center items-center p-10">
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


