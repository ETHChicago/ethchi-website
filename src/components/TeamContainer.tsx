
export default function TeamContainer() {
    return (
        <div className="m-10">
            <h1 className="mt-8 text-3xl text-primaryBackground text-center">Core Team</h1>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
                <CoreTeamCard name="Andrew Poterala" title="Summoner/Member at ChainVision" img="/logo.png"/>
                <CoreTeamCard name="James He" title="Ethereum Core Developer at Offchain Labs" img="/logo.png"/>
                <CoreTeamCard name="Andrew Cashen" title="Crypto Art Curator and Special Event Producer" img="/images/team/cashen.jpg"/>
                <CoreTeamCard name="Bobbie Rachford" title="Blockchain Community Growth Leader" img="/logo.png"/>
                <CoreTeamCard name="Penryn" title="Constitution DAO Core Team Member" img="/logo.png"/>
                <CoreTeamCard name="Gabby Kusz" title="CEO Global Digital Asset and Cryptocurrency Association" img="/logo.png"/>
                <CoreTeamCard name="Caroline Shaul" title="Chief of Staff at StoryCo" img="/logo.png"/>
                <CoreTeamCard name="Alexandra Oleksiuk" title="Sr. Business Development Manager, Fintech at World Business Chicago" img="/logo.png"/>
                <CoreTeamCard name="Kaitlyn Majoy" title="Operations Lead at ChainVision" img="/logo.png"/>
                <CoreTeamCard name="Simon Naut" title="Creative Designer at Freelance Florist" img="/logo.png"/>
                <CoreTeamCard name="Billy Welch" title="Co-founder Term Labs" img="/logo.png"/>
                <CoreTeamCard name="Ian Wylie" title="Founder at City Farmers" img="/logo.png"/>
                <CoreTeamCard name="Erin Magennis" title="DeSci Strategist" img="/logo.png"/>
                <CoreTeamCard name="Andrew Gunderman" title="Co-Founder, Coherence. Co-Founder, GENESIS" img="/logo.png"/>
                <CoreTeamCard name="Seth Akkerman" title="Interactive Designer" img="/logo.png"/>
                <div className="md:hidden lg:block">
                    <CoreTeamCard name="Cami Darling" title="Web3 Marketing and Content Manager" img="/logo.png"/>
                </div>
            </div>
            {/* small view */}
            <div className="flex justify-center md:hidden">
                <CoreTeamCard name="Thomas Butler" title="Software Engineer, Co-Founder FHT Labs" img="/images/team/butler.jpg"/>
            </div>
            {/* medium view */}
            <div className="hidden md:flex lg:hidden justify-center ">
                <CoreTeamCard name="Cami Darling" title="Web3 Marketing and Content Manager" img="/logo.png"/>
                <CoreTeamCard name="Thomas Butler" title="Software Engineer, Co-Founder FHT Labs" img="/images/team/butler.jpg"/>
            </div>
            {/* large view */}
            <div className="hidden lg:flex justify-center ">
                <CoreTeamCard name="Thomas Butler" title="Software Engineer, Co-Founder FHT Labs" img="/images/team/butler.jpg"/>
            </div>

            <h1 className="mt-8 text-3xl text-primaryBackground text-center">Other Volunteers</h1>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-10 place-items-center m-10">
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
                <VolunteerCard name="first last" img="/logo.png"/>
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

interface IVolunteerCard {
    name: string,
    img: string,
}
function VolunteerCard({name, img}: IVolunteerCard) {
    return (
        <div className="w-fit flex flex-col justify-start items-center m-2 text-primaryBackground">
            <img 
                src={img} 
                alt="" 
                width="50" 
                height="50" 
                loading="lazy"
                className="absolute outline outline-1 rounded-md bg-primaryType"
            />
            <h1 className="relative font-bold mt-14 text-center text-xs">{name}</h1>
        </div>
    )
}
