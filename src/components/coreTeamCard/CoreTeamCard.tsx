interface ICoreTeamCard {
    name: string,
    title: string,
    img: string,
}
export default function CoreTeamCard({name, title, img}: ICoreTeamCard) {
    return (
        <div className="w-fill flex flex-col items-center m-6 text-primaryBackground text-center">
            <img 
                src={img} 
                alt="" 
                width="100" 
                height="100" 
                loading="lazy"
                className="outline outline-1 rounded-md bg-primaryType"
            />
            <h1 className="font-bold text-xl">{name}</h1>
            <h2 className="italic text-lg w-40">{title}</h2>
        </div>
    )
}

