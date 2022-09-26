import {
  FaDownload,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare
} from 'react-icons/fa';
import { PageTitle } from '../../PageTitle';
import profileImg from '../../../assets/images/picture.png';
import illustrationImg from '../../../assets/images/triangle.png';
import { HeroSkillSection } from '../HeroSkillSection';
import { Container } from './styles';
import { WordTyping } from '../../WordTyping';

export function AboutSection() {
  function handleRedirect(url: string) {
    window.open(url);
  }
  return (
    <Container id="about">
      <PageTitle classN="pageTitle" title="Quem sou" description="sobre me" />

      <section>
        <div data-aos="fade-up">
          <h1>
            Eu me chamo Djayson Rodrigues,
            <WordTyping />
          </h1>
          <p>
            Programador e desenvolvedor há mais de 3 anos. O início de minha
            jornada começa em 2018 no curso de análise e desenvolvimento de
            sistemas na Universidade Estácio de Sá onde obtive vários contatos
            com diferentes linguagens de programação, foi lá que descobri meus
            maiores vícios que são: produzir códigos de qualidade, criar
            websites, aplicações e sistemas. Com o passar do tempo, adquiri
            vasto conhecimento nas diversas linguagens de programação utilizadas
            hoje no mercado.
          </p>
          <p>
            Sou um engenheiro de software dedicado a criar diferentes projetos
            cujo interesse é construir sites interativos, acessíveis e
            responsivos. Um especialista apaixonado por soluções simples para
            resolver problemas difíceis. Não tenho nenhuma linguagem de
            programação &#34; favorita &#34;, mas gosto de codificar na stack de
            JavaScript no momento. Também gosto de pensar fora da caixa de
            codificação, gosto de priorizar tarefas e aprender coisas novas,
            estou sempre experimentando as melhores práticas e desenvolvendo
            projetos reais em busca de ganhar mais conhecimento para contribuir
            com soluções modernas e criativas para meus clientes.
          </p>

          <div className="moreInfo">
            <span>Telefone / Whatsapp : (85) 99177-4335</span>
            <span> Parangaba | Fortaleza - ce </span>
          </div>
          <div className="moreContactInfo">
            <button
              type="button"
              onClick={() =>
                handleRedirect(
                  'https://drive.google.com/file/d/1ZwmVCONo5KWvEQrjpK6dSaJb6aazEwNd/view'
                )
              }
            >
              Download CV <FaDownload />
            </button>
            <div>
              <FaGithubSquare
                aria-label="Navegar para o GitHub"
                tabIndex={-1}
                onClick={() => handleRedirect('https://github.com/Djaysson')}
              />
              <FaLinkedin
                aria-label="Navegar para o Linkedin"
                tabIndex={-1}
                onClick={() =>
                  handleRedirect('https://www.linkedin.com/in/djaysonrodrigues')
                }
              />
              <FaInstagramSquare
                aria-label="Navegar para o Instagram"
                tabIndex={-1}
                onClick={() =>
                  handleRedirect('https://www.instagram.com/djayson.rodrigues')
                }
              />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={profileImg} alt="Profile picture" />
          <img src={illustrationImg} alt="Illustrative image of a triangle" />
        </div>
      </section>
      <HeroSkillSection />
    </Container>
  );
}
