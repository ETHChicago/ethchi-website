
export default function TeamContainer() {
    return (
        <div className="felx items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
                <CoreTeamCard name="Andrew Poterala" title="Summoner/Member at ChainVision" img="/logo.png"/>
                <CoreTeamCard name="James He" title="Ethereum Core Developer at Offchain Labs" img="/logo.png"/>
                <CoreTeamCard name="Andrew Cashen" title="Crypto Art Curator and Special Event Producer" img="/images/team/cashen.jpg"/>
                <CoreTeamCard name="Bobbie Rachford" title="Blockchain Community Growth Leader" img="/logo.png"/>
            </div>
            <div className="hidden md:grid grid-cols-3 gap-4 place-items-center">
                <CoreTeamCard name="Seth Akkerman" title="Interactive Designer" img="/logo.png"/>
                <CoreTeamCard name="Cami Darling" title="Web3 Marketing and Content Manager" img="/logo.png"/>
                <CoreTeamCard name="Thomas Butler" title="Freelance Software Engineer" img="/images/team/butler.jpg"/>
            </div>
            <div className="md:hidden grid grid-cols-2 gap-4 place-items-center">
                <CoreTeamCard name="Seth Akkerman" title="Interactive Designer" img="/logo.png"/>
                <CoreTeamCard name="Cami Darling" title="Web3 Marketing and Content Manager" img="/logo.png"/>
            </div>
            <div className="md:hidden grid grid-cols-1 gap-4 place-items-center">
                <CoreTeamCard name="Thomas Butler" title="Freelance Software Engineer" img="/images/team/butler.jpg"/>
            </div>
        </div>
    )
}

interface ICoreTeamCard {
    name: string,
    title: string,
    img: string,
}
function CoreTeamCard({name, title, img}: ICoreTeamCard) {
    return (
        <div className="w-fit flex flex-col justify-start items-center m-6 text-primaryBackground">
            <img 
                src={img} 
                alt="" 
                width="100" 
                height="100" 
                loading="lazy"
                className="absolute outline outline-1 rounded-md bg-primaryType"
            />
            <h1 className="relative font-bold text-sm mt-28 text-center">{name}</h1>
            <h2 className="relative italic text-sm text-center h-14 w-32">{title}</h2>
        </div>
    )
}