import VideoBackground from "./elements/videoBackground/VideoBackground"
import Accordion from "../../components/accordion/Accordion"
import VennityMap from "../../components/vennityMap/VennityMap"
import PartnerContainer from "./elements/partnerContainer/PartnerContainer"

export default function Home() {
    return (
        <>
        <div className="w-full bg-primaryBackground">

            {/* video bacground */}
            <div>
                <VideoBackground videoId='jfKfPfyJRdk'/>
            </div>

            <div>
                <img
                    className="w-full" 
                    src="/images/learn-build-create-network-banner.png" 
                    alt="learn build create network banner"
                />
            </div>

            {/* vennity event map embed */}
            <div className="bg-grid_bg_navy w-full h-full">
                <div className="p-10 py-20">
                    <VennityMap />
                </div>
            </div>


            {/* FAQ section */}
            <div className="p-10">
                <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">FAQ</h1> 

                <div className="flex flex-col justify-evenly space-y-4 items-center">
                    <Accordion label="WHAT IS ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                    <Accordion label="HOW CAN I ATTEND ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                    <Accordion label="HOW CAN I ATTEND ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                    <Accordion label="HOW CAN I ATTEND ETHCHICAGO?">
                        <p>ETHChicago is a 3 day blkj  asdlfksa s dfslf as fdlsakdjfs laalskdjf</p>
                    </Accordion>
                </div>
            </div>

            {/* Partners sections */}
            <div className="p-10">
                <h1 className="font-mono font-bold text-4xl text-primaryType mb-4">OUR PARTNERS</h1> 
                <PartnerContainer />
            </div>
            
        </div>
        </>
    )
}
