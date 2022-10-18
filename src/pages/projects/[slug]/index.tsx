import Head from 'next/head';
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
      <Head>
        <title>{project.title} | Portfólio djayson rodrigues</title>
        <meta name="description" content={project.context} />
        <meta property="og:title" content={project.title} />
        <meta property="og:description" content={project.context} />
        <meta property="og:url" content="https://www.djaysonrodrigues.tk" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="portfólio djayson rodrigues" />
        <meta property="og:image" content={project.thumbnail} />
        <meta property="og:image:secure_url" content={project.thumbnail} />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:url" content="https://www.djaysonrodrigues.tk" />
        <meta name="twitter:title" content={project.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="portfólio djayson rodrigues" />
        <meta name="twitter:image" content={project.thumbnail} />
        <meta name="twitter:image:src" content={project.thumbnail} />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
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

          <ul data-aos="fade-left">
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
          <button type="button" data-aos="zoom-in">
            <Link href="/#recentProjects">
              <a>Ver projetos recentes </a>
            </Link>
          </button>
          <button type="button" data-aos="zoom-in">
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
