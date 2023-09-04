import PartnerCard from "../partnerCard/PartnerCard"

export default function PartnerContainer() {
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-16">
            <PartnerCard logo="/images/logos/ARB_lockup_white.svg" url="https://arbitrum.io/"/>
            <PartnerCard logo="/images/logos/BUIDLGUIDL.jpeg" url="https://buidlguidl.com/"/>
            <PartnerCard logo="/images/logos/CHAINVISION.png" url=""/>
            <PartnerCard logo="/images/logos/GE_CHAMBER.png" url="https://www.gechamber.com/"/>
            <PartnerCard logo="/images/logos/GLOBAL_DCA.png" url="https://global-dca.org/"/>
            <PartnerCard logo="/images/logos/HOPSCOTCH.jpg" url="https://learn.hopscotch.trade/"/>
            <PartnerCard logo="/images/logos/icebreaker.png" url="https://www.icebreaker.xyz/"/>
            <PartnerCard logo="/images/logos/chicagoDAO.png" url="https://chicagodao.io/"/>
            <PartnerCard logo="/images/logos/LEDGIBLE.png" url="https://ledgible.io/"/>
            <PartnerCard logo="/images/logos/MANTLE.png" url="https://www.mantle-labs.com/"/>
            <PartnerCard logo="/images/logos/umich-bchain.png" url="https://www.michiganblockchain.org/"/>
            <PartnerCard logo="/images/logos/RTL.jpg" url="https://rosariotechlaw.com/"/>
            <PartnerCard logo="/images/logos/holaplex.png" url="https://www.holaplex.com/" />
            <PartnerCard logo="/images/logos/RUNTIME_VERIFICATION.png" url="https://runtimeverification.com/"/>
            <PartnerCard logo="/images/logos/vennity.png" url="https://www.vennity.co/"/>
            <PartnerCard logo="/images/logos/WBC.png" url="https://worldbusinesschicago.com/"/>
            <PartnerCard logo="/images/logos/EF-ESP-logo-white-text.png" url="https://esp.ethereum.foundation/"/>
            <PartnerCard logo="/images/logos/TAIKAI_Logotype_White.png" url="https://taikai.network/"/>
            <PartnerCard logo="/images/logos/cmt-digital.jpeg" url="https://cmt.digital/"/>
            <PartnerCard logo="/images/logos/formidium.png" url="https://formidium.com/"/>
            <div className="block lg:hidden">
                <PartnerCard logo="/images/logos/ercx-logo.png" url="https://ercx.runtimeverification.com/"/>
            </div>
            <div className="block lg:hidden">
                <PartnerCard logo="/images/logos/c4-logo.png" url="https://cryptoconsortium.org/"/>
            </div>
        </div>
        <div className="hidden lg:grid lg:grid-cols-3 mx-16">
            <PartnerCard logo="/images/logos/ercx-logo.png" url="https://ercx.runtimeverification.com/"/>
            <PartnerCard logo="/images/logos/c4-logo.png" url="https://cryptoconsortium.org/"/>
            <PartnerCard logo="/images/logos/imNotArt.png" url="https://www.imnotart.com/"/>
        </div>
        <div className="grid md:grid md:grid-cols-1 lg:hidden mx-16">
            <PartnerCard logo="/images/logos/imNotArt.png" url="https://www.imnotart.com/"/>
        </div>
        </>
    )
}
