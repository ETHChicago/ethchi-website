import { Link } from "react-router-dom"

interface IHeroButton {
    url: string,
    label: string
    target?: string
    rel?: string
}
export default function HeroButton({ url, label, target, rel}: IHeroButton) {
    return (
        <div>
            <Link to={url} target={target} rel={rel}>
                <button className="text-white bg-primaryBrand p-2 px-8 m-2 font-bold ease-in duration-100 w-64">
                    {label}
                </button>
            </Link>
        </div>
    ) 
}
