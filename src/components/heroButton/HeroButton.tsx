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
                <button className="text-white bg-primaryBrand p-2 px-8 m-2 font-bold ease-in duration-100">
                    {label}
                </button>
            </Link>
        </div>
    ) 
}
