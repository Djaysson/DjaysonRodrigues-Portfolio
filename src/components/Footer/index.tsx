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
        <img
          src={logoIcon}
          alt="Logotipo do website pessoal do desenvolvedor Djayson Rodrigues"
        />
        <div />
      </div>
      <div className="container">
        <button
          aria-label="Botão para o topo do site"
          type="button"
          onClick={handleScrollTop}
        >
          <BsFillArrowUpCircleFill />
        </button>
        <section>
          <FaGithubSquare
            aria-label="Navegar para o GitHub"
            onClick={() => handleRedirect('https://github.com/Djaysson')}
          />
          <FaLinkedin
            aria-label="Navegar para o Linkedin"
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/djaysonrodrigues')
            }
          />
          <FaInstagramSquare
            aria-label="Navegar para o Instagram"
            onClick={() =>
              handleRedirect('https://www.instagram.com/djayson.rodrigues')
            }
          />
        </section>
      </div>

      <p> Copyright &copy; 2022 D.Rodrigues-Dev </p>
    </Container>
  );
}
