import { hackerCheckoutUrl } from "../utils/checkoutConfig"

export default function HackerTicketRedirect() {
    window.location.replace(hackerCheckoutUrl)
    return null
}
