
interface IHeroButton {
    url: string,
    label: string
}
export default function HeroButton({ url, label }: IHeroButton) {
    return (
        <div>
            <a href={url} >
                <button className="w-32 text-white p-2 border border-white m-2 hover:bg-white hover:text-black font-bold ease-in duration-100 rounded-md">
                    {label}
                </button>
            </a>
        </div>
    ) 
}
