
export default function TeamContainer() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CoreTeamCard name="Firstname Lastname" title="cool title" img="/logo.png"/>
            <CoreTeamCard name="Firstname Lastname" title="cool title" img="/logo.png"/>
            <CoreTeamCard name="Firstname Lastname" title="cool title" img="/logo.png"/>
            <CoreTeamCard name="Firstname Lastname" title="cool title" img="/logo.png"/>
            <CoreTeamCard name="Firstname Lastname" title="cool title" img="/logo.png"/>
            <CoreTeamCard name="Firstname Lastname" title="cool title" img="/logo.png"/>
        </div>
    )
}

interface ICoreTeamCard {
    name: string,
    title: string,
    img: string,
}
function CoreTeamCard({name, title, img}: ICoreTeamCard) {
    return (
        <div className="w-fit flex flex-col justify-center items-center rounded-md m-6">
            <img 
                src={img} 
                alt="" 
                width="100" 
                height="100" 
                loading="lazy"
            />
            <h1 className="font-bold text-sm">{name}</h1>
            <h2 className="italic text-sm">{title}</h2>
        </div>
    )
}