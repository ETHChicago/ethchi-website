import Image from 'next/image'
import Link from 'next/link'


interface ISponsorCard {
        logo: string,
}
export default function SponsorCard({logo}: ISponsorCard) {
    return (
            <Link href="https://arbitrum.io/">
                <div className="flex flex-col justify-center items-center bg-white p-2 w-70 m-4 rounded-xl outline hover:bg-neutral-900 ease-in duration-100 shadow-2xl">
                    <Image
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                    />
                </div> 
            </Link>
    )
}

