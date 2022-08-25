import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';
import logoIcon from '../../assets/images/logo.png';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="logoContainer">
        <img src={logoIcon} alt="Djayson Rodrigues personal website logo" />
        <div />
      </div>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          <BsFillArrowUpCircleFill />
        </button>
        <section>
          <FaGithubSquare
            onClick={() => handleRedirect('https://github.com/Djaysson')}
          />
          <FaLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/djaysonrodrigues')
            }
          />
          <FaInstagramSquare
            onClick={() =>
              handleRedirect('https://www.instagram.com/djaysonrodrigues')
            }
          />
        </section>
      </div>

      <p> Copyright &copy; 2022 D.Rodrigues-Dev </p>
    </Container>
  );
}
