
export default function SponsorContainer() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-16">
            <SponsorCard logo="/images/logos/ARBITRUM.png" url="https://arbitrum.io/"/>
            <SponsorCard logo="/images/logos/BUIDLGUIDL.png" url="https://buidlguidl.com/"/>
            <SponsorCard logo="/images/logos/CHAINVISION.png" url=""/>
            <SponsorCard logo="/images/logos/ECC.png" url="https://www.gechamber.com/"/>
            <SponsorCard logo="/images/logos/GLOBAL DCA.png" url="https://global-dca.org/"/>
            <SponsorCard logo="/images/logos/HOPSCOTCH.png" url="https://learn.hopscotch.trade/"/>
            <SponsorCard logo="/images/logos/ICEBREAKER.png" url="https://www.icebreaker.xyz/"/>
            <SponsorCard logo="/images/logos/CHICAGO DAO.png" url="https://chicagodao.io/"/>
            <SponsorCard logo="/images/logos/LEDGIBLE.png" url="https://ledgible.io/"/>
            <SponsorCard logo="/images/logos/MANTLE.png" url="https://www.mantle-labs.com/"/>
            <SponsorCard logo="/images/logos/UMICH BCHAIN.png" url="https://www.michiganblockchain.org/"/>
            <SponsorCard logo="/images/logos/RUNTIME VERIFICATION.png" url="https://runtimeverification.com/"/>
            <div className="lg:hidden">
                <SponsorCard logo="/images/logos/VENNITY.png" url="https://www.vennity.co/"/>
            </div>
            <div className="lg:hidden">
                <SponsorCard logo="/images/logos/WBC.png" url="https://worldbusinesschicago.com/"/>
            </div>
        </div>
        <div className="hidden md:hidden lg:grid grid-cols-4 mx-64">
            <div className="w-full h-full" />
            <SponsorCard logo="/images/logos/WBC.png" url="https://worldbusinesschicago.com/"/>
            <SponsorCard logo="/images/logos/VENNITY.png" url="https://www.vennity.co/"/>
            <div className="w-full h-full" />
        </div>
        </>
    )
}

interface ISponsorCard {
        logo: string,
        url: string
}
function SponsorCard({logo, url}: ISponsorCard) {
    return (
            <a href={url}>
                <div className="flex justify-center items-center h-full w-full bg-transparent hover:bg-secondaryBrand hover:outline rounded-xl hover:shadow-xl ease-in duration-100">
                    <img
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                        loading="lazy"
                    />
                </div> 
            </a>
    )
}