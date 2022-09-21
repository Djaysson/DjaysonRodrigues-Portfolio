import Head from 'next/head';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { AllProjectItems } from '../../components/AllProjectItems';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { getPrismicClient } from '../../services/prismic';
import { ProjectsProps } from '../../types/types';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Portfólio djayson rodrigues</title>
        <meta
          name="description"
          content="Galeria de projetos do portfólio do programador e desenvolvedor Djayson Rodrigues, estes projetos foram criados durante sua jornada como profissional de TI."
        />
        <meta
          property="og:title"
          content="Projetos | portfólio djayson rodrigues"
        />
        <meta
          property="og:description"
          content="Galeria de projetos do portfólio do programador e desenvolvedor Djayson Rodrigues, estes projetos foram criados durante sua jornada como profissional de TI."
        />
        <meta property="og:url" content="https://djaysonrodrigues.vercel.app" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="portfólio djayson rodrigues" />
        <meta property="og:image" content="/ogprojectsimage.png" />
        <meta property="og:image:secure_url" content="/ogprojectsimage.png" />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:url" content="djaysonrodrigues.vercel.app" />
        <meta
          name="twitter:title"
          content="Projetos | portfólio djayson rodrigues"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="portfólio djayson rodrigues" />
        <meta name="twitter:image" content="/ogprojectsimage.png" />
        <meta name="twitter:image:src" content="/ogprojectsimage.png" />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
      <Header />
      <div>
        <PageTitle
          classN="pageTitle"
          title="Portfolio"
          description="Meus trabalhos"
        />
      </div>
      <main className="container">
        {projects.map(project => (
          <AllProjectItems
            key={project.slug}
            title={project.title}
            type={project.category}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
      <Footer />
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    occupation: project.data.occupation,
    tech: project.data.tech,
    hosting: project.data.hosting,
    context: project.data.context,
    category: project.data.category,
    description: project.data.description,
    demo: project.data.demo.url,
    github: project.data.github.url,
    icon: project.data.icon.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: { projects },
    revalidate: 86400
  };
};
