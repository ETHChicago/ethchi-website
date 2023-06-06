import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                Home
            </Link>

            <Link href="https://forum.ethchicago.xyz/"> 
                Forum 
            </Link>

            <Link href="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3">
                Get Tickets
            </Link>

            <Link href="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/contributing">
                Docs
            </Link>
        </nav>
    )
}

