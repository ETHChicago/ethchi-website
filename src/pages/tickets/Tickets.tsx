import links from "../../utils/links"
import { Link } from "react-router-dom";
import { generalCheckoutUrl, vipCheckoutUrl, generalPaywallConfig, vipPaywallConfig } from "../../utils/checkoutConfig";
import TrackBox from "./trackBox/TrackBox";
import { Paywall } from "@unlock-protocol/paywall";
import networks from '@unlock-protocol/networks'

export default function Tickets() {
    
    const paywall = new Paywall(networks) 
    
    function handleGeneralCheckout() {
        paywall.loadCheckoutModal(generalPaywallConfig)
    }

    function handleVipCheckout() {
        paywall.loadCheckoutModal(vipPaywallConfig)
    }

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
                    checkoutText="Apply Now"
                    applicationLink={links.forms.hackerApp}
                />
                <TrackBox
                    trackName="Conference - General Attendee"
                    trackDescription={[
                        "Small meals & beverages for 2 days",
                        "Full access to all panels, workshops, and guest speakers",
                        "Daily networking/happy hours",
                    ]}
                    checkoutText="Buy Now"
                    checkoutPopup={handleGeneralCheckout}
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
                    checkoutText="Buy Now"
                    checkoutPopup={handleVipCheckout}
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

