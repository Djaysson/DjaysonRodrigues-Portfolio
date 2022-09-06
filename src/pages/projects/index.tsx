import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { AllProjectItems } from '../../components/AllProjectItems';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { getPrismicClient } from '../../services/prismic';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

interface ProjectData {
  slug: string;
  title: string;
  occupation: string;
  tech: string;
  hosting: string;
  context: string;
  category: string;
  description: string;
  demo: string;
  github: string;
  icon: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: ProjectData[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
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
