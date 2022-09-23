import { MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import homeIcon from '../../assets/images/homeIcon.png';
import userIcon from '../../assets/images/userIcon.png';
import bagIcon from '../../assets/images/bagIcon.png';
import phoneIcon from '../../assets/images/phoneIcon.png';
import logoIcon from '../../assets/images/logo.png';
import { Container, MobileNavBar } from './styles';

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <Container>
      <MobileNavBar>
        <button
          type="button"
          aria-label="Botão de abrir e fechar o menu"
          onClick={handleOpenMenu}
        >
          {openMenu !== true ? <MdMenu /> : <MdClose />}
        </button>
        <Link href="/">
          <a aria-label="link para a página inicial">
            <img
              src={logoIcon}
              alt="Logotipo do website pessoal do desenvolvedor Djayson Rodrigues"
            />
          </a>
        </Link>
      </MobileNavBar>
      <nav className={openMenu !== true ? '' : 'open'}>
        <ul onClick={handleOpenMenu}>
          <NavLink
            title="Home"
            path="/"
            icon={homeIcon}
            description="Link de navegação da seção inicial"
          />
          <NavLink
            title="Sobre"
            path="/#about"
            icon={userIcon}
            description="Link de navegação para a seção sobre"
          />
          <img
            src={logoIcon}
            alt="Logotipo do website pessoal do desenvolvedor Djayson Rodrigues"
          />
          <NavLink
            title="Portfolio"
            path="/projects"
            icon={bagIcon}
            description="Link de navegação da seção do projetos"
            includes
          />
          <NavLink
            title="Contato"
            path="/#contact"
            icon={phoneIcon}
            description="Link de navegação da seção de contato"
          />
        </ul>
      </nav>
    </Container>
  );
}
