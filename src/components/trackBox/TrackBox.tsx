interface ITrackBox {
    trackName: string,
    trackDescription: string[],
    checkoutLink: string,
    checkoutText: string,
}
export default function TrackBox({trackName, trackDescription, checkoutLink, checkoutText }: ITrackBox) {
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
                <a href={checkoutLink} target="_blank" rel="noreferrer" >
                    <button className="outline outline-2 rounded-md p-2 text-primaryType bg-primaryBackground hover:bg-primaryBrand ease-in duration-100">{checkoutText}</button>
                </a>
            </div>
        </div>
    )
}