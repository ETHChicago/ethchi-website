import Iframe from "react-iframe"

export default function VennityMap() {
    return (
        <>
        <div className="hidden md:flex justify-center items-center my-4">
            <Iframe 
                url="https://app.vennity.co/verses/ethchicago/map"
                width="640px"
                height="320px"
                display="block"
            />
        </div>
        <div className="md:hidden flex justify-center items-center my-4">
            <Iframe 
                url="https://app.vennity.co/verses/ethchicago/map"
                width="480px"
                height="240px"
                display="block"
            />
        </div>
        </>
    )
}
