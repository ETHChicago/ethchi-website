
export default function ShowcaseCard({ side }: {side: string}) {
    return (
        <div className={side === 'left' ? "flex w-full justify-start" : "flex w-full justify-end"} >
           <div className="bg-primaryBackground w-4/12 m-12 rounded-sm">
                <p className="text-primaryType text-xl font-bold text-center">Showcase Title</p>
                <div className="flex justify-center items-center p-6">
                    <img 
                        src="/images/brand/ethchi_flag.jpg" 
                        alt="ethchi flag" 
                        width={250} 
                        height={160}
                    />
                </div>
            </div> 
        </div>
    )
}