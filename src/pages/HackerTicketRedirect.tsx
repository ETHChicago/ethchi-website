import { hackerCheckoutUrl } from "../utils/checkoutConfig"

export default function HackerTicketRedirect() {
    console.log(`Redirecting to: ${hackerCheckoutUrl}`)
    window.location.replace(hackerCheckoutUrl)
    return null
}
