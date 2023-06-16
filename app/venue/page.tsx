import Image from "next/image";
import VennityMap from "../components/VennityMap";
import Link from "next/link";

export default function Venue() {
    return (
        <div className="flex flex-col justify-center items-center m-10">
            <h1 className="flex justify-center text-2xl">Venue</h1>

            <div className="flex flex-col justify-center m-10 outline">
                <Image src="/images/venue_blueprint.png" alt="venue map" width={800} height={800}/>
            </div>

            <div className="flex flex-col justify-center m-20">
                <h3>
                    <strong>Location: </strong>
                    <Link className="hover:underline" href="https://www.invitedclubs.com/clubs/the-metropolitan">
                        The M Club - Willis Tower, 233 S Wacker Dr, Chicago, IL 60606
                    </Link>
                </h3>
                <h3><strong>Floor: </strong>66 & 67</h3>
            </div>

            <div className="flex flex-col justify-center m-10">
                <VennityMap />
            </div>
        </div>
    )
}