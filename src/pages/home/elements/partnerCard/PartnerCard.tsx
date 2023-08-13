
export default function PartnerCard({
    logo, 
    url
}: {
    logo: string, 
    url: string
}) {
    return (
            <a href={url} target="_blank" rel="noreferrer">
                <div className="flex justify-center items-center w-full h-full min-w-[96px] min-h-[96px] ease-in duration-100">
                    <img
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                        loading="lazy"
                        className="hover:opacity-60"
                    />
                </div> 
            </a>
    )
}