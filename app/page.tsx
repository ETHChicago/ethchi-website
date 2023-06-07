import Image from "next/image"

export default function Home() {
    return (
        <div className="flex items-center justify-center h-screen bg-scroll bg-center bg-cover bg-homepage_bg"> 
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
            </div> 
        </div>
    )
}
