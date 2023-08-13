interface ITrackBox {
    trackName: string,
    trackDescription: string[],
    applicationLink?: string,
    checkoutText: string,
    checkoutPopup?: () => void,
}
export default function TrackBox({trackName, trackDescription, applicationLink, checkoutText, checkoutPopup }: ITrackBox) {
    return (
        <div className="flex flex-col justify-between m-10 p-4 shadow-xl w-96 h-[550px] md:h-[650px] lg:h-[500px] max-w-xl bg-primaryBackground text-primaryType">
            <div>
                <h1 className="text-2xl text-primaryType font-mono font-bold">{trackName}</h1>
                <div className="mt-10 my-2">
                    <h1 className="text-md text-primaryType font-mono font-bold">Perks:</h1>
                    <ul className="ml-6 text-sm list-disc marker:text-primaryType">
                        {
                            trackDescription.map((item) => (
                                <li>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="flex justify-center items-center m-4">
                {applicationLink && (
                    <a href={applicationLink} target="_blank" rel="noreferrer" >
                        <button className="w-48 p-2 text-primaryType bg-primaryBrand hover:opacity-60 ease-in duration-100">
                            {checkoutText}
                        </button>
                    </a>
                )}
                {checkoutPopup && (
                    <button 
                        className="w-48 p-2 text-primaryType bg-primaryBrand hover:opacity-60 ease-in duration-100"
                        onClick={checkoutPopup}
                    >
                        {checkoutText}
                    </button>
                )}
            </div>

        </div>
    )
}
