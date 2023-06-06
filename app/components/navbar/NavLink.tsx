import Link from "next/link"

interface NavLinkProps {
    href: string,
    label: string
}

export default function NavLink({ href, label }: NavLinkProps) {
    return (
        <Link href={href}>{label}</Link>
    )
}
