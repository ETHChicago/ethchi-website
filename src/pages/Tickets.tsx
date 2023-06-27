import { useState, useEffect } from "react"

const checkoutUrls = {
    vip: "https://app.unlock-protocol.com/checkout?id=e1c01efb-3ec4-48fd-884c-8d433563efe2",
    traditional: "https://app.unlock-protocol.com/checkout?id=dfba3f60-5366-4136-b410-f3a8079cc37d",
    builderApplication: "https://docs.google.com/forms/d/1-w54D8bVEDwTa-TENZw8ukBSdHEKmNR-b83SPTFPP94/edit"
}

export default function Tickets() {

    /*
    * SWITCH CHECKOUT ON DATE - NOT BEING USED
    const [currentDate, setCurrentDate] = useState(new Date());
   
    // continually update current date
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        })

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    const isEarlyBird = () => {
        const earlyBirdEndDate = new Date("6/26/2023") // TODO: update this date to be when early bird ticketing stops
        return currentDate < earlyBirdEndDate
    }
    */

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-10">
                <TrackBox
                    trackName="Builder"
                    trackDescription="For Devs, Creatives, Designers, and anyone that wants to help build, and submit a project."
                    checkoutLink={checkoutUrls.builderApplication}
                    checkoutText="Apply Now"
                />
                <TrackBox
                    trackName="Traditional"
                    trackDescription="Traditional"
                    checkoutLink={checkoutUrls.traditional}
                    checkoutText="Buy Now"
                />
                <TrackBox
                    trackName="VIP"
                    trackDescription="description"
                    checkoutLink={checkoutUrls.vip}
                    checkoutText="Buy Now"
                />
            </div>
            <div className="flex flex-col justify-center items-center m-4">
                <p>Tickets are provided by Unlock Protocol, and deployed to Arbitrum layer 2.</p>
                <a href="https://developer.arbitrum.io/intro/" className="underline">What is Arbitrum?</a>
                <a href="https://bridge.arbitrum.io/?l2ChainId=42161" className="underline">Arbitrum Bridge</a>
                <p>No wallet is necessary for checkout.</p>
            </div>

        </div>
    )
}

interface ITrackBox {
    trackName: string,
    trackDescription: string,
    checkoutLink: string,
    checkoutText: string,
}
function TrackBox({trackName, trackDescription, checkoutLink, checkoutText }: ITrackBox) {
    return (
        <div className="m-10 outline p-4 rounded-xl shadow-xl w-4/5 max-w-xl">
            <h1 className="text-xl">{trackName}</h1>
            <div className="my-2">
                <p>{trackDescription}</p>
            </div>
            <div className="flex justify-center items-center m-4">
                <a href={checkoutLink} target="_blank">
                    <button className="outline outline-2 rounded-md p-1 hover:text-white hover:bg-black ease-in duration-100">{checkoutText}</button>
                </a>
            </div>
        </div>
    )
}