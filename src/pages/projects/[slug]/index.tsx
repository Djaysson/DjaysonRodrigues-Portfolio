import { useRouter } from 'next/router';
import Prismic from '@prismicio/client';
import { GetStaticProps, GetStaticPaths } from 'next';
import { FaRegWindowClose } from 'react-icons/fa';
import Link from 'next/link';
import { Banner } from '../../../components/Banner';
import { PageTitle } from '../../../components/PageTitle';
import { Footer } from '../../../components/Footer';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectProps } from '../../../types/types';
import { Container } from '../../../styles/UniqueProjectStyles';
import { LoadingScreen } from '../../../components/LoadingScreen';

export default function UniqueProject({ project }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }
  return (
    <Container>
      <div className="title">
        <PageTitle
          classN="pageTitle"
          title="Detalhes do projeto"
          description="Sobre este projeto"
        />

        <Link href="/projects">
          <a>
            <FaRegWindowClose />
          </a>
        </Link>
      </div>
      <Banner
        title={project.title}
        type={project.category}
        imgUrl={project.thumbnail}
      />

      <main>
        <div>
          <div>
            <img src={project.icon} alt={`${project.title} project image`} />
            <h2>
              Projeto <span>{project.title}</span>
            </h2>
          </div>

          <ul>
            <li>
              - Função: <span>{project.occupation}</span>
            </li>
            <li>
              - Tecnologias: <span>{project.tech}</span>
            </li>
            <li>
              - Hospedagem: <span>{project.hosting}</span>
            </li>
            <li>
              - Contexto: <span>{project.context}</span>
            </li>
            <li>
              - Descrição técnica: <span>{project.description}</span>
            </li>

            <li>
              - Ver projeto online:{' '}
              <a href={project.demo} target="_blank">
                click aqui
              </a>
            </li>
            <li>
              -GitHub :{' '}
              <a href={project.github} target="_blank">
                click aqui
              </a>
            </li>
          </ul>
        </div>

        <div>
          <button type="button">
            <Link href="/#recentProjects">
              <a>Ver projetos recentes </a>
            </Link>
          </button>
          <button type="button">
            <Link href="/#contact">
              <a>Entre em contato</a>
            </Link>
          </button>
        </div>
      </main>

      <Footer />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();

  const project = await prismic.query([
    Prismic.Predicates.at('document.type', 'projeto')
  ]);

  const paths = project.results.map(items => ({
    params: {
      slug: items.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projeto', String(slug), {});

  const project = {
    slug: response.uid,
    title: response.data.title,
    occupation: response.data.occupation,
    tech: response.data.tech,
    hosting: response.data.hosting,
    context: response.data.context,
    category: response.data.category,
    description: response.data.description,
    demo: response.data.demo.url,
    github: response.data.github.url,
    icon: response.data.icon.url,
    thumbnail: response.data.thumbnail.url
  };

  return {
    props: {
      project
    },
    revalidate: 86400
  };
};
