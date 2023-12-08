
export default function HolidayCollectibleMint() {
    const handleMint = () => {
        console.log("minting nft")
    }

    return (
        <div className="flex justify-center items-center p-10">
            <button className="bg-primaryBackground p-2 rounded-xl text-primaryType" onClick={handleMint}>
                Mint Button
            </button>
        </div>
    )
}