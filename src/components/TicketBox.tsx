import CheckoutButton from "./CheckoutButton"

interface ITicketBox {
    trackName: string,
    checkoutUrl: string
}
export default function TicketBox({trackName, checkoutUrl}: ITicketBox) {

    return (
        <div className="outline m-10 rounded-xl shadow-xl">
            <div className="flex flex-col justify-center items-center p-10">
                <h1 className="underline text-xl">{trackName}</h1>
                <ul>
                    Whats Included:
                    <li>
                       item 1
                    </li>
                    <li>
                       item  2
                    </li>
                </ul>
                <CheckoutButton url={checkoutUrl} /> 
            </div>
        </div>
    )
}