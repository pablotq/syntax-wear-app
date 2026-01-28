import IconMenu from "@/assets/images/icon-menu.png"
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import type { NavLink } from "../Header";
import { IoMdClose } from "react-icons/io";

interface MenuMobileProps {
    navLinks: NavLink[];
}

export const MenuMobile = ({ navLinks }: MenuMobileProps) => {

    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);


    return (
        <>
            <button className="cursor-pointer">
                <img src={IconMenu} alt="Ícone menu" onClick={() => setMenuIsOpen(!menuIsOpen)} />
            </button>

            {/* Overlay */}
            <div className={`${menuIsOpen ? 'bg-black/70 visible' : 'bg-transparent invisible'} fixed top-0 bottom-0 left-0 right-0 z-30`} onClick={() => setMenuIsOpen(!menuIsOpen)}>

                {/* Drawer */}
                <div className={`${menuIsOpen ? 'translate-x-0' : '-translate-x-full'} absolute top-0 bottom-0 bg-white pt-6 transition-all duration-500 ease-in-out w-full`} onClick={(e) => e.stopPropagation()}>

                    <header className="bg-black text-white p-5">
                        <nav className="flex justify-between">
                            <Link to="/sign-in" className="flex gap-3">
                                <FaRegUserCircle className="h-6 w-6" />
                                <p>Olá! Faça o seu login</p>
                            </Link>
                            <IoMdClose className="cursor-pointer text-2xl" onClick={() => setMenuIsOpen(!menuIsOpen)}/>
                        </nav>
                    </header>

                    <ul className="px-4 overflow-y-auto scollbar-hide h-[calc(100%-140px)] flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <li><Link to={link.href} onClick={() => setMenuIsOpen(!menuIsOpen)}>{link.name}</Link></li>
                        ))}

                        <li className=''>
                            <Link to="/our-stores" onClick={() => setMenuIsOpen(!menuIsOpen)}>Nossas lojas</Link>
                        </li>
                        <li className=''>
                            <Link to="/about" onClick={() => setMenuIsOpen(!menuIsOpen)}>Sobre</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
}