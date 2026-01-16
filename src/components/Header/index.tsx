import Logo from '@/assets/images/logo.png';
import IconUser from '@/assets/images/icon-user.png';
import IconAbout from '@/assets/images/icon-about.png';
import IconsCart from '@/assets/images/icon-cart.png';

export const Header = () => {
  return (
    <div className="relative">
      <header className="fixed bg-amber-700">
        <div>
          <img src={Logo} alt="Logo SyntaxWear" />

          <nav>
            <ul>
              <li><a href="#">Masculino</a></li>
              <li><a href="#">Feminino</a></li>
              <li><a href="#">Outlet</a></li>
            </ul>
          </nav>

          <nav>
            <ul>
              <li><a href="#">Nossas lojas</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="#"><img src={IconUser} alt="Ícone de login" /></a></li>
              <li><a href="#"><img src={IconAbout} alt="Ícone sobre" /></a></li>
              <li><a href="#"><img src={IconsCart} alt="Ícone carrinho" /></a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
