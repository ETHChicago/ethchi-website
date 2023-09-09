import { useState } from "react"
import { usePrepareFaucetClaimTokens, useFaucetClaimTokens } from "../../generated/wagmi-hooks"
import ConnectWalletButton from "../../components/connectWalletButton/ConnectWalletButton"

export default function Faucet() {
    const [recipient, setRecipient] = useState<`0x${string}`>('0x')

    const { config } = usePrepareFaucetClaimTokens({
        address: '0x124D294A0C6ba775FB951216f9D2eaBdC3CCA5aE', // TODO: update to not be hardcoded
        args: [
            recipient,
        ]
    })
    const { write, isSuccess, isLoading, isError } = useFaucetClaimTokens(config)

    function drip() {
        console.log(recipient)
        write?.()
    }

    return (
        <div className="bg-grid_bg_navy">
            <div className="p-8">
                <p className="font-bold text-5xl md:text-6xl text-primaryType">FAUCET</p>
            </div>

            <div className="flex justify-center items-center p-8">
                <div className="flex flex-col bg-primaryBackground p-8 justify-center items-center space-y-6">
                    <div>
                        <ConnectWalletButton />
                    </div>

                    <div className="flex space-x-6">
                        <input 
                            className="w-[200px] md:w-[400px] lg:w-[600px] rounded-sm" 
                            type="text" 
                            placeholder="Ethereum address"
                            onChange={(e) => setRecipient(e.target.value as `0x${string}`) } // this feels like bad practice but idk
                        />
                        <button className="text-primaryType" onClick={drip}>submit</button>
                        <div className="flex flex-col">
                            {isLoading && <p>submitting...</p>}
                            {isSuccess && <p>submitted!</p>}
                            {isError && <p>error submitting transaction</p>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}