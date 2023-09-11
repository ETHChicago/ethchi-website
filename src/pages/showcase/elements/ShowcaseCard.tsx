import { ReactNode } from "react"

export default function ShowcaseCard({ side, title, description, children}: {side: string, title: string, description: string, children: ReactNode}) {
    return (
        <div className={side === 'left' ? "flex w-full justify-start" : "flex w-full justify-end"} >
           <div className="bg-primaryBackground m-12 p-4">
                <p className="text-primaryType text-xl font-bold text-center">{title}</p>
                <div className="flex justify-center items-center p-6">
                    {children}
                </div>
                <p className="text-primaryType max-w-[300px] text-center">{description}</p>
            </div> 
        </div>
    )
}