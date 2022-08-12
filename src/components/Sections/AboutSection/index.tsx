import {
  FaDownload,
  FaGithubSquare,
  FaLinkedin,
  FaInstagramSquare
} from 'react-icons/fa';
import { PageTitle } from '../../PageTitle';
import profileImg from '../../../assets/images/picture.png';
import illustrationImg from '../../../assets/images/triangle.png';
import { Container } from './styles';

export function AboutSection() {
  return (
    <Container>
      <PageTitle classN="pageTitle" title="Quem sou" description="sobre me" />

      <section>
        <div>
          <img src={profileImg} alt="Profile picture" />
          <img src={illustrationImg} alt="Illustrative image of a triangle" />
        </div>
        <div>
          <h1>
            Eu sou Djayson Rodrigues, <span>developer</span>
          </h1>
          <p>
            Sou um freelancer baseado no Reino Unido e tenho vindo a construir
            há anos designs e websites UX/UI notáveis, que estão de acordo com
            as últimas tendências de design. Eu ajudo a converter uma visão e
            uma ideia em produtos úteis e significativos. Ter um olho aguçado
            para a evolução do produto me ajuda a priorizar tarefas, iterar
            rapidamente e entregar mais rapidamente.
          </p>
          <p>
            Sou um freelancer baseado no Reino Unido e tenho vindo a construir
            há anos designs e websites UX/UI notáveis, que estão de acordo com
            as últimas tendências de design. Eu ajudo a converter uma visão e
            uma ideia em produtos úteis e significativos. Ter um olho aguçado
            para a evolução do produto me ajuda a priorizar tarefas, iterar
            rapidamente e entregar mais rapidamente.
          </p>
          <p>
            Sou um freelancer baseado no Reino Unido e tenho vindo a construir
            há anos designs e websites UX/UI notáveis, que estão de acordo com
            as últimas tendências de design. Eu ajudo a converter uma visão e
            uma ideia em produtos úteis e significativos. Ter um olho aguçado
            para a evolução do produto me ajuda a priorizar tarefas, iterar
            rapidamente e entregar mais rapidamente.
          </p>
          <div>
            <span>Telefone / Whatsapp : (85) 99177-4335</span>
            <span> Parangaba | Fortaleza - ce </span>
          </div>
          <div>
            <button type="button">
              Download CV <FaDownload />
            </button>
            <div>
              <a href="">
                {' '}
                <FaGithubSquare />
              </a>
              <a href="">
                <FaLinkedin />
              </a>
              <a href="">
                {' '}
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
