import Image from 'next/image'
import Link from 'next/link'


interface ISponsorCard {
        logo: string,
        label: string
}
export default function SponsorCard({logo, label}: ISponsorCard) {
    return (
            <Link href="https://arbitrum.io/">
                <div className="flex flex-col justify-center items-center bg-white p-5 md:w-40 m-10 rounded-xl">
                    <Image
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                    />
                    <h2 className="text-2xl font-bold">{label}</h2>
                </div> 
            </Link>
    )
}

