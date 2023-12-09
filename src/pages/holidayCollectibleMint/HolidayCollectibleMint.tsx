import { useEffect } from "react"
import { useAccount, useWaitForTransaction } from "wagmi"
import { useHolidayCollectible2023SafeMint, usePrepareHolidayCollectible2023SafeMint } from "../../generated/wagmi-hooks"
import { contracts } from "../../data/contracts"


export default function HolidayCollectibleMint() {
    const { address } = useAccount()


    const { data, write } = useHolidayCollectible2023SafeMint({
        address: contracts.holidayCollectible2023 as `0x${string}`,
        args: [address ? address : '0x', '1']
    })

    const { isLoading, isSuccess } = useWaitForTransaction({
        hash: data?.hash
    })

    
    const handleMint = () => {
        if (address) {            
            console.log(`using: ${address}`)
        } else {
            console.log("TODO: handle not connected")
            return
        }

        write()
    }

    return (
        <div className="flex flex-col justify-center items-center p-10">
            <button className="bg-primaryBackground p-2 rounded-xl text-primaryType" onClick={handleMint}>
                Mint Button
            </button>
            {isLoading && <div className="text-center">Loading...</div>}
            {isSuccess && <div className="text-center">Success</div>}
        </div>
    )
}
