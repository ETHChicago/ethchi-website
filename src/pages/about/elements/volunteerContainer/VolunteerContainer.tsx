import VolunteerCard from "../volunteerCard/VolunteerCard"

export default function VolunteerContainer() {
    return (
        <div className="">
            <span className="underline text-primaryBrand underline-offset-4">
                <h1 className="text-4xl text-primaryType text-center p-4 font-bold">Volunteers</h1>
            </span>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 p-8">
                <VolunteerCard name="Sazón" company="The POD 🐳 : Baby Whales Genesis" />
                <VolunteerCard name="Dawufi" company="OAK Network" />
                <VolunteerCard name="Ansylla" company="Crypto Beginners Bundle .com" />
                <VolunteerCard name="Rick" company="O(1) Labs" />
                <VolunteerCard name="Morgan Culbertson"company="Hopscotch" />
                <VolunteerCard name="Tuan Jones" company="Art & Design" />
                <VolunteerCard name="Jordan Andrews"company="Consultant" />
                <VolunteerCard name="Patryk Krasnicki"company="Messari" />
                <VolunteerCard name="Kelli Schneider" company="Consultant" />
                <VolunteerCard name="Simon Doorfman" company="YamLike"/>
                <VolunteerCard name="Peter" company="" />
                <VolunteerCard name="GoldiesNFTart"company="Scary Garys/SOBO Clothing" />
                <VolunteerCard name="Nelson Rosario" company="Rosario Tech Law, LLC" />
                <VolunteerCard name="David Stankiewicz" company="" />
                <VolunteerCard name="Bongo" company="Community Manager & Web3 Liaison" />
                <VolunteerCard name="William Ojeda" company="" />
                <VolunteerCard name="Vlad Avesalon" company="Vennity" />
                <VolunteerCard name="Ludwig"company="SorellaLabs" />
                <VolunteerCard name="Chris" company="Decentland Labs" />
                <VolunteerCard name="Mingxuan He" company="University of Chicago" />
            </div>
        </div>
    )
}

