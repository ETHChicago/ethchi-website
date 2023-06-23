import CheckoutButton from "../components/CheckoutButton";

export default function TicketBox() {

    return (
        <div className="outline m-10 rounded-xl">
            <div className="flex flex-col justify-center items-center p-10">
                <h1>Tier Name</h1>
                <ul>
                    Whats Included:
                    <li>
                       item 1
                    </li>
                    <li>
                       item  2
                    </li>
                </ul>
                <CheckoutButton /> 
            </div>
        </div>
    )
}