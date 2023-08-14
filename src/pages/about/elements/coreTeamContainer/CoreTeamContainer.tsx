import CoreTeamCard from "../coreTeamCard/CoreTeamCard"

export default function CoreTeamContainer() {
    return (
        <div className="">
            <span className="underline text-primaryBackground underline-offset-4">
                <h1 className="text-6xl text-primaryType text-center font-bold p-4">Core Team</h1>
            </span>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
                <CoreTeamCard name="Andrew Poterala" title="Summoner/Member at ChainVision" img="/images/ethchi_nft/ethchi_8.png"/>
                <CoreTeamCard name="James He" title="Ethereum Core Developer at Offchain Labs" img="/images/ethchi_nft/ethchi_4.jpg"/>
                <CoreTeamCard name="Andrew Cashen" title="Crypto Art Curator and Special Event Producer" img="/images/ethchi_nft/ethchi_29.jpg"/>
                <CoreTeamCard name="Thomas Butler" title="Software Engineer" img="/images/ethchi_nft/ethchi_7.jpg"/>
                <CoreTeamCard name="Bobbie Rachford" title="Blockchain Community Growth Leader" img="/images/ethchi_nft/ethchi_16.png"/>
                <CoreTeamCard name="Cami Darling" title="Web3 Marketing and Content Manager" img="/images/ethchi_nft/ethchi_1.png"/>
                <CoreTeamCard name="Erin Magennis" title="DeSci Strategist" img="/images/ethchi_nft/ethchi_13.png"/>
                <CoreTeamCard name="Seth Akkerman" title="Interactive Designer" img="/images/ethchi_nft/ethchi_3.png"/>
                <CoreTeamCard name="Ian Hedrick" title="Founder, City Farmers" img="/images/ethchi_nft/ethchi_2.png"/>
                <CoreTeamCard name="Penryn" title="Constitution DAO Core Team Member" img="/logo.png"/>
                <CoreTeamCard name="Gabby Kusz" title="CEO Global Digital Asset and Cryptocurrency Association" img="/logo.png"/>
                <CoreTeamCard name="Caroline Shaul" title="Chief of Staff at StoryCo" img="/logo.png"/>
                <CoreTeamCard name="Alexandra Oleksiuk" title="Sr. Business Development Manager, Fintech at World Business Chicago" img="/logo.png"/>
                <CoreTeamCard name="Kaitlyn Majoy" title="Operations Lead at ChainVision" img="/logo.png"/>
                <CoreTeamCard name="Billy Welch" title="Co-founder, Term Labs" img="/logo.png"/>
                <div className="md:hidden lg:block">
                    <CoreTeamCard name="Simon Naut" title="Creative Designer at Freelance Florist" img="/logo.png"/>
                </div>
            </div>
            {/* small view */}
            <div className="flex justify-center md:hidden">
                <CoreTeamCard name="Andrew Gunderman" title="Co-Founder, Coherence. Co-Founder, GENESIS" img="/logo.png"/>
            </div>
            {/* medium view */}
            <div className="hidden md:flex lg:hidden justify-center ">
                <CoreTeamCard name="Simon Naut" title="Creative Designer at Freelance Florist" img="/logo.png"/>
                <CoreTeamCard name="Andrew Gunderman" title="Co-Founder, Coherence. Co-Founder, GENESIS" img="/logo.png"/>
            </div>
            {/* large view */}
            <div className="hidden lg:flex justify-center ">
                <CoreTeamCard name="Andrew Gunderman" title="Co-Founder, Coherence. Co-Founder, GENESIS" img="/logo.png"/>
            </div>

        </div>
    )
}

