import Link from 'next/link';
import { FiArrowDown } from 'react-icons/fi';
import picture from '../../../assets/images/macbook.png';
import { Container, Content, Citation, DownArrow } from './styles';

export function StartingSection() {
  return (
    <Container>
      <img data-aos="fade-up" src={picture} alt="Photo of a Macbook" />

      <Content data-aos="fade-left">
        <h2>Desenvolvendo soluções para</h2>
        <h1>
          Você & sua <span>empresa</span>{' '}
        </h1>
      </Content>
      <Citation data-aos="fade-left">
        <strong>Citação</strong>
        <q>
          Existem duas maneiras de construir um projeto de software: Uma é
          fazê-lo tão simples que obviamente não há falhas, e a outra é fazê-lo
          tão complicado que não existem falhas óbvias.{' '}
        </q>

        <a
          href="https://pt.wikipedia.org/wiki/Charles_Antony_Richard_Hoare"
          target="_blank"
          rel="noopener noreferrer"
        >
          - C.A.R. HOARE
        </a>
      </Citation>

      <DownArrow>
        <Link href="#about">
          <a>
            <FiArrowDown />
          </a>
        </Link>
      </DownArrow>
    </Container>
  );
}
