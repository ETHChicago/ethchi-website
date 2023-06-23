
import React, { useEffect, useState } from "react";

declare global {
    interface Window {
      unlockProtocol: {
        loadCheckoutModal: () => void;
      };
    }
  }

export default function CheckoutButton() {
    const [locked, setLocked] = useState<"pending" | "locked" | "unlocked">("pending");

    function unlockHandler(e: CustomEvent<any>) {
        setLocked(e.detail);
    }

    function checkout() {
        if (window.unlockProtocol) {
            window.unlockProtocol.loadCheckoutModal();
        }
    }

    useEffect(() => {
        window.addEventListener("unlockProtocol", unlockHandler as EventListener);

        return () => {
            window.removeEventListener("unlockProtocol", unlockHandler as EventListener);
        }
    })

    return (
        <div>
            <button onClick={checkout}>checkout</button>
        </div>
    )
}