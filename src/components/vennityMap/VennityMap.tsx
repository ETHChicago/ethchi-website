import Iframe from "react-iframe"
import links from "../../data/links"

export default function VennityMap() {
    return (
        <>
        <div className="hidden md:flex justify-center items-center rounded-lg">
            <Iframe 
                url={links.eventMap}
                width="1300"
                height="600"
                display="block"
		className="w-full"
            />
        </div>
        <div className="md:hidden flex justify-center items-center rounded-lg">
            <Iframe 
                url={`${links.eventMap}?show_title=false&iframe=true`}
                width="600"
                height="240"
                display="block"
		className="w-full"
            />
        </div>
        </>
    )
}
