import { FaRegWindowClose } from 'react-icons/fa';
import Link from 'next/link';
import { Banner } from '../../../components/Banner';

import { PageTitle } from '../../../components/PageTitle';

import { Container } from '../../../styles/UniqueProjectStyles';
import { Footer } from '../../../components/Footer';

export default function UniqueProject() {
  return (
    <Container>
      <div className="title">
        <PageTitle
          classN="pageTitle"
          title="Detalhes do projeto"
          description="Saiba mais sobre este projeto"
        />

        <Link href="/projects">
          <a>
            <FaRegWindowClose />
          </a>
        </Link>
      </div>
      <Banner
        title="Projeto 01"
        type="Website"
        imgUrl="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
      />

      <main>
        {/* <h1>Descrição & detalhes</h1> */}
        <div>
          <div>
            <img
              src="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
              alt=""
            />
            <h2>
              Projeto <span>Dshop-shoes</span>
            </h2>
          </div>

          <ul>
            <li>
              - Função: <span>Desenvolvedor Frot-end</span>
            </li>
            <li>
              - Tecnologias: <span>HTML-CSS -JS-REACTJS</span>
            </li>
            <li>
              - Hospedagem: <span>Vercel e MongoDB Atlas</span>
            </li>
            <li>
              - Contexto:{' '}
              <span>
                {' '}
                Teach Other é uma plataforma de agendamento de aula particular
                para universitários, desenvolvida para a disciplina Projeto
                Transversal da Universidade de Brasília (UnB).
              </span>
            </li>
            <li>
              - Descrição técnica:{' '}
              <span>
                No frontend, foi utilizado o NextJS com Typescript e Tailwind
                CSS. Ele é estático e com a rota de perfil do professor sendo
                renderizada no servidor. O backend é serverless através do
                combo: API Routes + MongoDB Atlas. Cada rota é uma função
                serverless independente, que só é ligada caso receba uma
                requisição, e ela escala automaticamente.
              </span>
            </li>

            <li>
              - Ver projeto online:{' '}
              <a href="https://github.com/Djaysson" target="_blank">
                click aqui
              </a>
            </li>
            <li>
              -GitHub :{' '}
              <a href="https://github.com/Djaysson" target="_blank">
                click aqui
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button type="button">
            <Link href="/projects">
              <a>VER OUTROS PROJETOS</a>
            </Link>
          </button>
          <button type="button">
            <Link href="/contact">
              <a> ENTRE EM CONTO</a>
            </Link>
          </button>
        </div>
      </main>

      <Footer />
    </Container>
  );
}
