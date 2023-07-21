import links from "../utils/links"
import { Link } from "react-router-dom";
import { hackerCheckoutUrl, generalCheckoutUrl, vipCheckoutUrl } from "../utils/checkoutConfig";


console.log(hackerCheckoutUrl)

export default function Tickets() {

    return (
        <div className="bg-ticket_page_bg bg-fixed bg-center bg-cover">
            <div className="flex flex-col justify-center items-center">
                <TrackBox
                    trackName="Hacker - Builder or Creative"
                    trackDescription={[
                        "Small meals & beverages for all 3 days",
                        "Comfortable working space with amazing views",
                        "Full access to all panels, workshops, and guest speakers",
                        "Opportunity to compete for Bounties in the Hackathon",
                        "Daily networking/happy hours",
                    ]}
                    checkoutLink={links.forms.hackerApp}
                    checkoutText="Apply Now"
                />
                <TrackBox
                    trackName="Conference - General Attendee"
                    trackDescription={[
                        "Small meals & beverages for all 2 days",
                        "Full access to all panels, workshops, and guest speakers",
                        "Daily networking/happy hours",
                    ]}
                    checkoutLink={generalCheckoutUrl}
                    checkoutText="Buy Now"
                />
                <TrackBox
                    trackName="VIP"
                    trackDescription={[
                        "Small meals & beverages for all 3 days",
                        "Comfortable working space with amazing views",
                        "Full access to all panels, workshops, and guest speakers",
                        "Daily networking/happy hours",
                        "VIP access to Sunday early evening reception with Hackathon finalists and top Chicago  founders and funders.",
                    ]}
                    checkoutLink={vipCheckoutUrl}
                    checkoutText="Buy Now"
                />
            </div>
            <div className="flex flex-col justify-center items-center m-4">
                <p>Tickets are provided by Unlock Protocol, and deployed to Arbitrum layer 2.</p>
                <p>No wallet required for purchase, powered by Unlock Protocol and Stripe.</p>
                <a href="https://developer.arbitrum.io/intro/" target="_blank" rel="noreferrer" className="underline">What is Arbitrum?</a>
                <a href="https://bridge.arbitrum.io/?l2ChainId=42161" target="_blank" rel="noreferrer" className="underline">Arbitrum Bridge</a>
                <Link to={links.termsAndConditions} target="_blank">
                    <p className="underline">Terms and Conditions</p>
                </Link>
            </div>

        </div>
    )
}

interface ITrackBox {
    trackName: string,
    trackDescription: string[],
    checkoutLink: string,
    checkoutText: string,
}
function TrackBox({trackName, trackDescription, checkoutLink, checkoutText }: ITrackBox) {
    return (
        <div className="m-10 p-4 rounded-xl shadow-xl w-4/5 max-w-xl bg-primaryBackground text-primaryType">
            <h1 className="text-2xl text-primaryBrand font-bold">{trackName}</h1>
            <div className="my-2">
                <ul className="ml-2 list-disc marker:text-primaryBrand">
                    {
                        trackDescription.map((item) => (
                            <li>{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex justify-center items-center m-4">
                <a href={checkoutLink} target="_blank" rel="noreferrer" >
                    <button className="outline outline-2 rounded-md p-2 text-primaryType bg-primaryBackground hover:bg-primaryBrand ease-in duration-100">{checkoutText}</button>
                </a>
            </div>
        </div>
    )
}