import NavLink from './NavLink';
import homeIcon from '../../assets/images/homeIcon.png';
import userIcon from '../../assets/images/userIcon.png';
import bagIcon from '../../assets/images/bagIcon.png';
import phoneIcon from '../../assets/images/phoneIcon.png';
import logoIcon from '../../assets/images/logo.png';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
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
    </Container>
  );
}
