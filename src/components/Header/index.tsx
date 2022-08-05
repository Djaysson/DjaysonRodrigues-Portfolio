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
          path="/sobre"
          icon={userIcon}
          iconDescription="Section navigation icon about"
        />
        <img src={logoIcon} alt="Djayson Rodrigues personal website logo" />
        <NavLink
          title="Portfolio"
          path="/portfolio"
          icon={bagIcon}
          iconDescription="Project section navigation icon"
        />
        <NavLink
          title="Contato"
          path="/contato"
          icon={phoneIcon}
          iconDescription="Contact section navigation icon"
        />
      </ul>
    </Container>
  );
}
