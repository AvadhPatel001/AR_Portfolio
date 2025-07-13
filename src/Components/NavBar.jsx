import { useState } from "react";
import { NavLinks } from "../Content/Data";
import { Menu, X } from "lucide-react";

const NavBar = ({navigate}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggle = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className="sticky top-0 z-50 border-b border-neutral-800/70 bg-neutral-900">
            <div className="w-full px-10 lg:px-20 py-2 flex justify-between items-center">

                {/* logo */}
                <a href="#">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl">AR</h1>
                </a>

                {/* navbar items */}
                <ul className="hidden lg:flex justify-end items-center">
                    {NavLinks.map((item, index) => (
                        <li key={index} className="mx-10 hover:scale-110 transition-all duration-100">
                            <a onClick={()=>navigate(item.title)} href={item.href} className="text-md text-neutral-400 hover:text-orange-500"  >{item.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Menu Btn */}
                <div className="lg:hidden text-neutral-300">
                    <button onClick={toggle}>
                        {openMenu ? <X /> : <Menu />}
                    </button>
                </div>
            </div>


            {/* side menu code */}
            <div className="lg:hidden">

                <div className={`fixed w-full bg-neutral-800 text-center p-5 space-y-5 transition-all duration-500 ease-in-out transform ${openMenu ? `opacity-100 translate-y-0 scale-100` : `opacity-0 -translate-y-80 scale-100 pointer-events-none`}`}>
                    <ul className="space-y-5">
                        {NavLinks.map((item, index) => (
                            <li key={index} className="hover:scale-110 transition-all duration-100">
                                <a onClick={toggle} className="px-10 text-md text-neutral-300 hover: hover:text-orange-500" href={item.href}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default NavBar