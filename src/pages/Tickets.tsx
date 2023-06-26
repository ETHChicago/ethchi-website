import { useState, useEffect } from "react"

export default function Tickets() {
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

    return (
        <div>
            <div className="flex flex-col justify-center items-center mt-10">
                <h1 className="text-xl">Choose Your Track</h1>
                {
                    isEarlyBird() ? 
                    <div>
                        <TrackBox
                            trackName="Hackers and Creatives"
                            trackDescription="description"
                            checkoutLink=""
                            checkoutText="Apply Now"
                            ticketPrice="75"
                        />
                        <TrackBox
                            trackName="Traditional"
                            trackDescription="description"
                            checkoutLink="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3"
                            checkoutText="Buy Now"
                            ticketPrice="375"
                        />
                        <TrackBox
                            trackName="VIP"
                            trackDescription="description"
                            checkoutLink="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3"
                            checkoutText="Buy Now"
                            ticketPrice="1000"
                        />
                    </div>

                    : 
                    <div>
                        <TrackBox
                            trackName="Hackers and Creatives"
                            trackDescription="description"
                            checkoutLink=""
                            checkoutText="Apply Now"
                            ticketPrice="100"
                        />
                        <TrackBox
                            trackName="Traditional"
                            trackDescription="description"
                            checkoutLink="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3"
                            checkoutText="Buy Now"
                            ticketPrice="500"
                        />
                        <TrackBox
                            trackName="VIP"
                            trackDescription="description"
                            checkoutLink="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3"
                            checkoutText="Buy Now"
                            ticketPrice="1000"
                        />
                    </div>
                }
            </div>

        </div>
    )
}

interface ITrackBox {
    trackName: string,
    trackDescription: string,
    checkoutLink: string,
    checkoutText: string,
    ticketPrice: string
}
function TrackBox({trackName, trackDescription, checkoutLink, checkoutText, ticketPrice}: ITrackBox) {
    return (
        <div className="m-10 outline p-4 rounded-xl shadow-xl w-4/5 max-w-xl">
            <h1 className="text-xl">{trackName} - ${ticketPrice}</h1>
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