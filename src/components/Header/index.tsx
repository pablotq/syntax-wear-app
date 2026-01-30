import Logo from '@/assets/images/logo.png';
import IconUser from '@/assets/images/icon-user.png';
import { Link } from '@tanstack/react-router';
import { MenuMobile } from '../MenuMobile';
import { CartButton } from '../CartButton';
import { CartDrawer } from '../CartDrawer';
import { useState } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Masculino", href: "/products/category/masculino" },
  { name: "Feminino", href: "/products/category/feminino" },
  { name: "Outlet", href: "/products/category/outlet" },
]

export const Header = () => {

      const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <header className="fixed top-5 left-0 right-0 z-10 mx-10">
        <div className='bg-white text-black max-w-330 mx-auto flex justify-between items-center py-3 px-7 rounded-2xl mt-5'>
          <Link to="/">
            <img src={Logo} alt="Logo SyntaxWear"
              className='w-32 md:w-36' />
          </Link>


          <nav className='hidden md:block'>
            <ul className='flex gap-6 lg:gap-15'>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link to="/products/category/$category"
                    params={{ category: link.name.toLowerCase() }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <ul className='flex gap-4 lg:gap-10 items-center'>
              <li className='hidden md:block'>
                <Link to="/our-stores">Nossas lojas</Link>
              </li>
              <li className='hidden md:block'>
                <Link to="/about">Sobre</Link>
              </li>
              <li className='md:hidden'>
                <MenuMobile navLinks={navLinks} />
              </li>
              <li className='hidden md:block'>
                <Link to="/sign-in"><img src={IconUser} alt="Ícone de login" /></Link>
              </li>
              <li>
                <CartButton onClick={() => setCartIsOpen(!cartIsOpen)}/>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <CartDrawer isOpen={cartIsOpen} onClose={() => setCartIsOpen(!cartIsOpen)} />
    </div>
  );
};
