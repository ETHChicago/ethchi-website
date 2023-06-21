import Iframe from "react-iframe"

export default function VennityMap() {
    return (
        <div>
            <Iframe 
                url="https://app.dev.vennity.co/verses/eth-chicago-2023/map"
                width="640px"
                height="320px"
                className=""
                display="block"
            />
        </div>
    )
}
