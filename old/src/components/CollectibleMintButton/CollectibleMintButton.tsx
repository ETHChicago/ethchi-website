//import { useEffect } from "react"

/*
import { 
    useNetwork, 
    useAccount, 
    useWaitForTransaction, 
    useSwitchNetwork 
} from "wagmi"

import { 
    useHolidayCollectible2023Mint,
} from "../../generated/wagmi-hooks"
*/
//import { contracts } from "../../data/contracts"
//import { connect } from "http2"

export default function CollectibleMintButton() {

    //const { address, isConnected, connector } = useAccount()

    /*
    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()
    const { data, write } = useHolidayCollectible2023Mint({
        address: contracts.holidayCollectible2023.mainnet as `0x${string}`,
        args: [address as `0x${string}`],
    })
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash
    })
    */

        /*
    
    const handleMint = () => {
        if (!isConnected) {
            alert("Please connect your wallet to continue")
            return
        }

        if (chain?.name != "Ethereum") {
            switchNetwork && switchNetwork(1)
            return
        }

        // write mint transaction
        write()
    }
        */

    
    return <div></div>
/*
    return (
        <div>
            <button 
                className="bg-primaryBackground text-xl p-4 px-10 rounded-xl text-primaryType" 
                disabled={isLoading}
                onClick={handleMint}
            >
                Mint
            </button>
            {isLoading && <div className="text-center">Loading...</div>}
            {isSuccess && <div className="text-center">Success</div>}
        </div>
    );
    */
}
