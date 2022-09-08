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
        <button type="button" onClick={handleOpenMenu}>
          {openMenu !== true ? <MdMenu /> : <MdClose />}
        </button>
        <Link href="/">
          <a>
            <img src={logoIcon} alt="Djayson Rodrigues personal website logo" />
          </a>
        </Link>
      </MobileNavBar>
      <nav className={openMenu !== true ? '' : 'open'}>
        <ul onClick={handleOpenMenu}>
          <NavLink
            title="Home"
            path="/"
            icon={homeIcon}
            iconDescription="Home section navigation icon"
          />
          <NavLink
            title="Sobre"
            path="/#about"
            icon={userIcon}
            iconDescription="Section navigation icon about"
          />
          <img src={logoIcon} alt="Djayson Rodrigues personal website logo" />
          <NavLink
            title="Portfolio"
            path="/projects"
            icon={bagIcon}
            iconDescription="Project section navigation icon"
            includes
          />
          <NavLink
            title="Contato"
            path="/#contact"
            icon={phoneIcon}
            iconDescription="Contact section navigation icon"
          />
        </ul>
      </nav>
    </Container>
  );
}
