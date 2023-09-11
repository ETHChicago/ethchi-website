import ShowcaseCard from "./elements/ShowcaseCard"

export default function Showcase() {
    return (
        <div className="bg-showcase_bg bg-cover bg-top bg-no-repeat">
            {/* for keeping the showcase sign visible */}
            <div className="h-[300px] md:h-[400px]">

            </div>
            <div className="flex flex-col">
                <ShowcaseCard side="left" title="showcase 1" description="here is an example showcase this is super awesome">
                    <img 
                        src="/images/brand/ethchi_flag.jpg" 
                        alt="ethchi flag" 
                        width={250} 
                        height={160}
                    />
                </ShowcaseCard>
                <ShowcaseCard side="right" title="showcase 2" description="here is an example showcase this is super awesome">
                    <img 
                        src="/images/brand/ethchi_flag.jpg" 
                        alt="ethchi flag" 
                        width={250} 
                        height={160}
                    />
                </ShowcaseCard>
                <ShowcaseCard side="left" title="showcase 3" description="here is an example showcase this is super awesome">
                    <img 
                        src="/images/brand/ethchi_flag.jpg" 
                        alt="ethchi flag" 
                        width={250} 
                        height={160}
                    />
                </ShowcaseCard>
            </div>
        </div>
    )
}