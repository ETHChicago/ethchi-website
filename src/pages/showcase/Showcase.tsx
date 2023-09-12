import ShowcaseCard from "./elements/ShowcaseCard"

export default function Showcase() {
    return (
        <div className="bg-showcase_bg bg-cover bg-top bg-no-repeat">
            {/* for keeping the showcase sign visible */}
            <div className="h-[300px] md:h-[400px] lg:h-[600px]">

            </div>
            <div className="flex flex-col">
                <ShowcaseCard 
                    side="left" 
                    title="Creating the Nouns Rail" 
                    description="Behind the scenes of the creation of the rail for the Lil Nouns X Gnars Skate Jam" 
                    imageURL="/images/gnarly_sketch.jpg"
                    contentURL="https://www.youtube.com/watch?v=VwRXt_SCshk"
                />
                <ShowcaseCard
                    side="right" 
                    title="Partner Spotlight: Arbitrum"
                    description=""
                    imageURL="https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2FF42BkLbAisu8fTFxPmGyv.jpeg%3Fheight%3D600%26width%3D1200&w=640&q=75"
                    contentURL="https://mirror.xyz/0x26f8ed780d34AE4c33CFeFe60C2dE48aF6D017Be/tEAN_NCuEFhq7sm_hPK1zjuB5AzOOqNBhwyB-BqPmYw"
                />
                <ShowcaseCard 
                    side="left" 
                    title="Blockchain as a Trust-Building Tool in the Public Sector" 
                    description="" 
                    imageURL="https://mirror.xyz/_next/image?url=https%3A%2F%2Fimages.mirror-media.xyz%2Fpublication-images%2Fzjh3fODzvZQSOe0e-4MdT.jpeg%3Fheight%3D562%26width%3D1124&w=640&q=75"
                    contentURL="https://mirror.xyz/0x26f8ed780d34AE4c33CFeFe60C2dE48aF6D017Be/8csXgdM_6VmD5FtaMGRQJnek1ftH_tqDdJdVI9gafQ8"
                />
                <ShowcaseCard
                    side="right"
                    title="Parter Spotlight: ETH Chicago collaborates with Craft The Future"
                    description=""
                    imageURL="https://images.mirror-media.xyz/publication-images/EZNRgULBdPBWMnW3zkcEL.png?height=448&width=896"
                    contentURL="https://mirror.xyz/0x26f8ed780d34AE4c33CFeFe60C2dE48aF6D017Be/IjhwhPmQgjzS4oI5Lpl_TR4D1C80FiEmE9iVYwIhKMo"
                />
                <ShowcaseCard
                    side="left"
                    title="Chicago: A Home to Self-Regulation of the Burgeoning Digital Asset Industry"
                    description=""
                    imageURL="https://images.mirror-media.xyz/publication-images/wpdaWN3NWWb1hPfgbLMjK.png?height=598&width=1195"
                    contentURL="https://mirror.xyz/0x26f8ed780d34AE4c33CFeFe60C2dE48aF6D017Be/BIRH581HFuZPHIvdStew_n9QwH1yUD76gIc48j5qBFM"
                />
                <ShowcaseCard
                    side="right"
                    title="ETHChicago: Where Art and Tech Collide and Creatives Thrive"
                    description=""
                    imageURL="https://images.mirror-media.xyz/publication-images/WKB5_8TZJIQH6buOXlmIz.png?height=540&width=1080"
                    contentURL="https://mirror.xyz/0x26f8ed780d34AE4c33CFeFe60C2dE48aF6D017Be/sjcvAJFMo7dU8ewENcTLXJBJy-VbeuHwqhP26WeU6XA"
                />
            </div>
        </div>
    )
}