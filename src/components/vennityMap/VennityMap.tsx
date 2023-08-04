import Iframe from "react-iframe"
import links from "../../utils/links"

export default function VennityMap() {
    return (
        <>
        <div className="hidden md:flex justify-center items-center my-4 rounded-lg">
            <Iframe 
                url={links.eventMap}
                width="1200"
                height="600"
                display="block"
            />
        </div>
        <div className="md:hidden flex justify-center items-center my-4 rounded-lg">
            <Iframe 
                url={links.eventMap}
                width="340"
                height="240"
                display="block"
            />
        </div>
        </>
    )
}
