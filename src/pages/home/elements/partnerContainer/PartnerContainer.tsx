import PartnerCard from "../partnerCard/PartnerCard"
import partners from "../../../../data/partners"

export default function PartnerContainer() {
    return (
        <>
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Object.values(partners).map((partner, index) => (
                    <PartnerCard logo={partner.logo} url={partner.link} key={index} />
                ))}
            </div>
        </div>
        </>
    )
}
