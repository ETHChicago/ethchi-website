'use client';
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-center">

            <div className="space-x-5" >

                <NavLink label="Home" url="/"  />
                <NavLink label="Forum" url="https://forum.ethchicago.xyz/" /> 
                <NavLink label="Tickets" url="https://app.unlock-protocol.com/checkout?id=a6562ec6-01c0-4277-993a-63eca4f9f4a3" /> 
                <NavLink label="Docs" url="https://app.gitbook.com/o/3DY0g0JFVajOGhd9U2j8/s/ENMzpj8ev3TK0p2I8vAV/contributing" /> 

                <NavDropdown 
                    title="title"
                    items={[
                        { url: "idk", label: "label" },
                        { url: "idk", label: "label" },
                    ]}
                />
            </div>

        </nav>
    )
}

interface LinkProps {
    url: string,
    label: string
}

function NavLink({ url, label }: LinkProps) {
    return (
        <Link 
            href={url}
            className="hover:underline"
        >
            {label}
        </Link>
    )
}


// nav drop down component
interface NavDropdownItems {
    items: LinkProps[],
    title: string
}
function NavDropdown({ items, title }: NavDropdownItems) {
    return (
     <div className="relative inline-block">
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none">
        {title}
      </button>
      <ul className="absolute z-10 hidden mt-2 space-y-2 p-2 bg-white rounded shadow-lg">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
    );
}
