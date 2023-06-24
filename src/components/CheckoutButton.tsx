
interface ICheckoutButton {
    url: string
}
export default function CheckoutButton({ url }:ICheckoutButton) {
    return (
        <div>
            <a href={url} target="_blank">
                <button>Checkout</button>
            </a>
        </div>
    )
}