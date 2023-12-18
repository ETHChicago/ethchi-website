import { useEffect } from "react"
import { 
    useNetwork, 
    useAccount, 
    useWaitForTransaction, 
    useSwitchNetwork 
} from "wagmi"
import { 
    useHolidayCollectible2023SafeMint, 
} from "../../generated/wagmi-hooks"
import { contracts } from "../../data/contracts"

export default function CollectibleMintButton() {

    const { address } = useAccount()
    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()
    const { data, write } = useHolidayCollectible2023SafeMint({
        address: contracts.holidayCollectible2023.sepolia as `0x${string}`,
    })
    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash
    })

    
    const handleMint = () => {
        if (!address) {            
            return
        }
        if (chain?.name != "Sepolia") {
            switchNetwork && switchNetwork(11155111)
            return
        }
        // write mint transaction
        write()
    }


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
}
