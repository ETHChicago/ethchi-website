
export default function Tickets() {

    return (
        <div>
            <div className="flex justify-center items-center mt-10">
                <h1 className="text-xl">Choose Your Track</h1>
            </div>

            <TrackBox
                trackName="Builder"
                trackDescription="builder description"
                checkoutLink=""
                checkoutText="Apply Now"
            />

            <TrackBox
                trackName="Traditional"
                trackDescription="builder description"
                checkoutLink="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3"
                checkoutText="Buy Now"
            />

            <TrackBox
                trackName="VIP"
                trackDescription="builder description"
                checkoutLink="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3"
                checkoutText="Buy Now"
            />
        </div>
    )
}

interface ITrackBox {
    trackName: string,
    trackDescription: string,
    checkoutLink: string,
    checkoutText: string
}
function TrackBox({trackName, trackDescription, checkoutLink, checkoutText}: ITrackBox) {
    return (
        <div className="m-10 outline p-4 rounded-xl shadow-xl">
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