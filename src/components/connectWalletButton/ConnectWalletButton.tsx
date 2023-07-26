import { useAccount, useConnect, useEnsName, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function ConnectWalletButton() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  function handleClick() {
    if(isConnected) {
        disconnect()
    } else {
        connect()
    }
  }

  return (
    <button 
      className="w-40 text-white p-2 border border-white m-2 hover:bg-secondaryBrand hover:text-black font-bold ease-in duration-100 rounded-md"
      onClick={handleClick}
    >
      {isConnected ? (
        ensName ?? `${address?.slice(0,4)} ... ${address?.slice(-4)}`
      ) : (
        'Connect Wallet'
      )}
    </button>
  )


}
