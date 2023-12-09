import { useEffect } from "react"
import { useAccount } from "wagmi"
import { useHolidayCollectible2023SafeMint, usePrepareHolidayCollectible2023SafeMint } from "../../generated/wagmi-hooks"
import { contracts } from "../../data/contracts"


export default function HolidayCollectibleMint() {
    const { address } = useAccount()


    const { data, isLoading, isSuccess, write } = useHolidayCollectible2023SafeMint({
        address: contracts.holidayCollectible2023 as `0x${string}`,
        args: [address ? address : '0x', '1']
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
        <div className="flex justify-center items-center p-10">
            <button className="bg-primaryBackground p-2 rounded-xl text-primaryType" onClick={handleMint}>
                Mint Button
            </button>
        </div>
    )
}
