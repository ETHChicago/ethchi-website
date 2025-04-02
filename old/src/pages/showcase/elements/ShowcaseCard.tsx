
import { Link } from 'react-router-dom'

export default function ShowcaseCard({ side, title, description, imageURL, contentURL }: {side: string, title: string, description: string, imageURL: string, contentURL: string}) {
    return (
        <Link to={contentURL} target="_blank" rel="noreferrer">
        <div className={side === 'left' ? "flex w-full justify-start" : "flex w-full justify-end"} >
           <div className="bg-primaryBackground m-12 p-4 w-[300px] md:w-[500px] lg:w-[800px] shadow-xl rounded-md hover:opacity-90">
                <p className="text-primaryType text-xl font-bold text-center">{title}</p>
                <div className="flex justify-center items-center p-6">
                    <img 
                        src={imageURL}
                        alt="showcase" 
                        width="full"
                    />
                </div>
                <p className="text-primaryType text-center">{description}</p>
            </div> 
        </div>
        </Link>
    )
}