
import { useEffect, useState } from "react"
import { useAccount, useConnect, useDisconnect, useEnsName } from "wagmi"
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function ConnectWalletButton() {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector()
    })
    const { disconnect } = useDisconnect()
    const [ buttonLabel, setButtonLabel ] = useState('Connect')
    const { data } = useEnsName({ address: address})

    function handleClick() {
        if (isConnected) {
            disconnect()
        } else {
            connect()
        }
    }

    useEffect(() => {
        if (isConnected) {
            if (data) {
                if (data.length > 10) {
                    setButtonLabel(`${data.slice(0,9)}...`)
                } else {
                    setButtonLabel(data)
                }
            } else {
                setButtonLabel(`${address?.slice(0,5)}...`)
            }
        } else {
            setButtonLabel('Connect')
        }
    }, [isConnected, data, address])


    return (
        <div>
            <button 
                className="rounded-xl bg-secondaryBrand2 shadow-xl w-36 bg-opacity-10 p-2"
                onClick={handleClick}
            >
                {buttonLabel}
            </button>
        </div>
    )
}