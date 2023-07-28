interface ITrackBox {
    trackName: string,
    trackDescription: string[],
    applicationLink?: string,
    checkoutText: string,
    checkoutPopup?: () => void,
}
export default function TrackBox({trackName, trackDescription, applicationLink, checkoutText, checkoutPopup }: ITrackBox) {
    return (
        <div className="m-10 p-4 rounded-xl shadow-xl w-4/5 max-w-xl bg-primaryBackground text-primaryType">
            <h1 className="text-2xl text-primaryBrand font-bold">{trackName}</h1>
            <div className="my-2">
                <ul className="ml-2 list-disc marker:text-primaryBrand">
                    {
                        trackDescription.map((item) => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex justify-center items-center m-4">
                {applicationLink && (
                    <a href={applicationLink} target="_blank" rel="noreferrer" >
                        <button className="outline outline-2 rounded-md p-2 text-primaryType bg-primaryBackground hover:bg-primaryBrand ease-in duration-100">{checkoutText}</button>
                    </a>
                )}
                {checkoutPopup && (
                    <button 
                        className="outline outline-2 rounded-md p-2 text-primaryType bg-primaryBackground hover:bg-primaryBrand ease-in duration-100"
                        onClick={checkoutPopup}
                    >
                        {checkoutText}
                    </button>
                )}
            </div>
        </div>
    )
}
