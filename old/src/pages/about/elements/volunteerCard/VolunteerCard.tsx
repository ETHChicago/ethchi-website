interface IVolunteerCard {
    name: string,
    company: string,
}
export default function VolunteerCard({name, company}: IVolunteerCard) {
    return (
        <div className="w-fill flex flex-col items-center text-primaryType text-center">
            <h1 className="font-bold text-lg">{name}</h1>
            <h1 className="italic text-md">{company}</h1>
        </div>
    )
}
