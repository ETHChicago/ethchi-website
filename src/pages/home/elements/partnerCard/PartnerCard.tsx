
export default function PartnerCard({
    logo, 
    url
}: {
    logo: string, 
    url: string
}) {
    return (
            <a href={url} target="_blank" rel="noreferrer">
                <div className="flex justify-center items-center w-full h-full min-w-[96px] min-h-[96px] bg-transparent hover:bg-secondaryBrand hover:outline rounded-xl hover:shadow-xl ease-in duration-100">
                    <img
                        src={logo}
                        alt="sponsor logo"
                        width={200}
                        height={160}
                        loading="lazy"
                    />
                </div> 
            </a>
    )
}