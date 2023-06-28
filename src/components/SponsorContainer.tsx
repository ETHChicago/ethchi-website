
export default function SponsorContainer() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-16">
            <SponsorCard logo="/images/logos/ARBITRUM.png" url="https://arbitrum.io/"/>
            <SponsorCard logo="/images/logos/BUIDLGUIDL.jpeg" url="https://buidlguidl.com/"/>
            <SponsorCard logo="/images/logos/CREATIVE_MORNINGS.png" url="https://creativemornings.com/cities/CHI"/>
            <SponsorCard logo="/images/logos/GE_CHAMBER.png" url="https://www.gechamber.com/"/>
            <SponsorCard logo="/images/logos/GLOBAL_DCA.png" url="https://global-dca.org/"/>
            <SponsorCard logo="/images/logos/HOPSCOTCH.jpg" url="https://learn.hopscotch.trade/"/>
            <SponsorCard logo="/images/logos/icebreaker.png" url="https://www.icebreaker.xyz/"/>
            <SponsorCard logo="/images/logos/chicagoDAO.png" url="https://chicagodao.io/"/>
            <SponsorCard logo="/images/logos/JUMP.png" url="https://jumpcrypto.com/"/>
            <SponsorCard logo="/images/logos/LEDGIBLE.png" url="https://ledgible.io/"/>
            <SponsorCard logo="/images/logos/MANTLE.png" url="https://www.mantle-labs.com/"/>
            <SponsorCard logo="/images/logos/michiganBlockchain.png" url=""/>
            <SponsorCard logo="/images/logos/rtl.jpg" url=""/>
            <SponsorCard logo="/images/logos/RUNTIME_VERIFICATION.png" url="https://runtimeverification.com/"/>
            <SponsorCard logo="/images/logos/vennity.png" url="https://www.vennity.co/"/>
            <div className="lg:hidden w-full h-full">
                <SponsorCard logo="/images/logos/WORLD_BUSINESS_CHICAGO.png" url="https://worldbusinesschicago.com/"/>
            </div>
        </div>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
            <div className="w-full h-full" />
            <SponsorCard logo="/images/logos/WORLD_BUSINESS_CHICAGO.png" url="https://worldbusinesschicago.com/"/>
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
                <div className="flex justify-center items-center h-full w-full bg-transparent p-2 rounded-xl outline outline-primaryBackground hover:bg-secondaryBrand ease-in duration-100 shadow-2xl">
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