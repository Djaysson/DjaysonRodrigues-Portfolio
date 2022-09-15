import Slider from 'react-slick';
import { FaCode } from 'react-icons/fa';
import { GiCycle } from 'react-icons/gi';
import { RiComputerLine } from 'react-icons/ri';
import { Container, SkillCard } from './styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PageTitle } from '../PageTitle';

export function DifferentiatedSkills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };
  return (
    <Container>
      <PageTitle
        title="Diferencial"
        description="Conhecimentos"
        classN="pageTitle"
      />
      <Slider {...settings}>
        <SkillCard>
          <h2>Metodologias Ágeis</h2>
          <div>
            <GiCycle />
            <p>
              Utilizo metodologias e Planejamentos otimizados que dinamizam o
              fluxo de produção. Através de feedback e interações constantes,
              garantindo a agilidade e eficiência do processo.
            </p>
          </div>
        </SkillCard>
        <SkillCard>
          <h2>Interfaces de alta fidelidade</h2>
          <div>
            <RiComputerLine />
            <p>
              Trabalho com a implementação fiel de interfaces presando pela
              melhor experiência do usuário para atender as expectativas de cada
              projeto.{' '}
            </p>
          </div>
        </SkillCard>
        <SkillCard>
          <h2>Clean Code</h2>
          <div>
            <FaCode />
            <p>
              Tenho como minha principal diretriz durante o desenvolvimento a
              qualidade do código seguindo as melhores práticas do mercado.
            </p>
          </div>
        </SkillCard>
      </Slider>
    </Container>
  );
}
