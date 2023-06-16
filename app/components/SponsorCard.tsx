import Image from 'next/image'
import Link from 'next/link'


interface ISponsorCard {
        logo: string,
        label: string
}
export default function SponsorCard({logo, label}: ISponsorCard) {
    return (
            <Link href="https://arbitrum.io/">
                <div className="bg-white p-10 w-40 m-10 rounded-xl">
                    <Image
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                    />
                    <h2 className="text-xl">{label}</h2>
                </div> 
            </Link>
    )
}

