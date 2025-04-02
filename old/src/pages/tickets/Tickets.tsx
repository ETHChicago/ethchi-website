import links from "../../data/links"
import { Link } from "react-router-dom";
import { generalPaywallConfig, vipPaywallConfig } from "../../utils/checkoutConfig";
import TrackBox from "./trackBox/TrackBox";


export default function Tickets() {
    
    

    return (
        <div className="bg-grid_bg_navy">
            <div className="flex flex-col xl:flex-row justify-evenly items-center">
                <TrackBox
                    trackName="Builder or Creative"
                    trackDescription={[
                        "Small meals & beverages for all 3 days",
                        "Comfortable working space with amazing views",
                        "Full access to all panels, workshops, and guest speakers",
                        "Opportunity to compete for Bounties in the Hackathon",
                        "Daily networking/happy hours",
                        "Opportunity to have ticket cost covered through the application",
                    ]}
                    checkoutText="Apply Now"
                    applicationLink={links.forms.hackerApp}
                    earlyBirdPrice={75}
                    standardPrice={100}
                />
                <TrackBox
                    trackName="General Admission"
                    trackDescription={[
                        "Small meals & beverages for all 3 days",
                        "Full access to all panels, workshops, and guest speakers",
                        "Daily networking/happy hours",
                    ]}
                    checkoutText="Buy Now"
                    earlyBirdPrice={375}
                    standardPrice={500}
                />
                <TrackBox
                    trackName="VIP Admission"
                    trackDescription={[
                        "Small meals & beverages for all 3 days",
                        "Comfortable working space with amazing views",
                        "Full access to all panels, workshops, and guest speakers",
                        "Daily networking/happy hours",
                        "VIP access to Sunday early evening reception with Hackathon finalists and top Chicago  founders and funders.",
                    ]}
                    checkoutText="Buy Now"
                    standardPrice={1000}
                />
            </div>
            <div className="p-6">
                <div className="flex flex-col justify-center items-center bg-primaryBackground text-primaryType text-sm p-2 rounded-xl text-center">
                    <p>Tickets are provided by Unlock Protocol, and deployed to Arbitrum layer 2.</p>
                    <p>No wallet required for purchase, powered by Unlock Protocol and Stripe.</p>
                    <a href="https://developer.arbitrum.io/intro/" target="_blank" rel="noreferrer" className="underline">What is Arbitrum?</a>
                    <a href="https://bridge.arbitrum.io/?l2ChainId=42161" target="_blank" rel="noreferrer" className="underline">Arbitrum Bridge</a>
                    <Link to={links.termsAndConditions} target="_blank">
                        <p className="underline">Terms and Conditions</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

