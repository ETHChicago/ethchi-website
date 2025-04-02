import WinnersContainer from "./elements/WinnersContainer/WinnersContainer"

export default function Hackathon() {
    return (
        <div className="bg-grid_bg_navy">
            <div className="p-8">
                <p className="font-bold text-5xl md:text-6xl text-primaryType">HACKATHON WINNERS</p>
            </div>
            <div className="">
                <WinnersContainer />
            </div>
        </div>
    )
}
