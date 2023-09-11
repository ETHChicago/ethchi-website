import ShowcaseCard from "./elements/ShowcaseCard"

export default function Showcase() {
    return (
        <div className="bg-showcase_bg bg-cover bg-no-repeat">
            {/* for keeping the showcase sign visible */}
            <div className="h-[600px]">

            </div>
            <div className="flex flex-col">
                <ShowcaseCard side="left"/>                
                <ShowcaseCard side="right"/>                
                <ShowcaseCard side="left"/>                
                <ShowcaseCard side="right"/>                
            </div>
        </div>
    )
}