import Iframe from "react-iframe"

export default function VennityMap() {
    return (
        <>
        <div className="hidden md:flex justify-center items-center my-4 outline rounded-lg shadow-xl outline-2">
            <Iframe 
                url="https://app.vennity.co/verses/ethchicago/map"
                width="700"
                height="400"
                display="block"
            />
        </div>
        <div className="md:hidden flex justify-center items-center my-4 outline rounded-lg shadow-xl outline-2">
            <Iframe 
                url="https://app.vennity.co/verses/ethchicago/map"
                width="340x"
                height="240px"
                display="block"
            />
        </div>
        </>
    )
}
