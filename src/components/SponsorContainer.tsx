
export default function SponsorContainer() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
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
            <SponsorCard logo="/images/logos/WORLD_BUSINESS_CHICAGO.png" url="https://worldbusinesschicago.com/"/>
        </div>
    )
}

interface ISponsorCard {
        logo: string,
        url: string
}
function SponsorCard({logo, url}: ISponsorCard) {
    return (
            <a href={url}>
                <div className="flex justify-center items-center bg-transparent p-2 w-70 m-4 rounded-xl outline hover:bg-neutral-900 ease-in duration-100 shadow-2xl">
                    <img
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                    />
                </div> 
            </a>
    )
}