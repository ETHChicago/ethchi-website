import { Link } from "react-router-dom"

interface IHeroButton {
    url: string,
    label: string
    target?: string
}
export default function HeroButton({ url, label, target}: IHeroButton) {
    return (
        <div>
            <Link to={url} target={target}>
                <button className="w-32 text-white p-2 border border-white m-2 hover:bg-secondaryBrand hover:text-black font-bold ease-in duration-100 rounded-md">
                    {label}
                </button>
            </Link>
        </div>
    ) 
}