import Link from 'next/link';
import { PageTitle } from '../../PageTitle';
import { ProjectItems } from '../../ProjectItems';
import { Container } from './styles';

interface ProjectData {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
}

interface ProjectsProps {
  projects: ProjectData[];
}

export function ProjectsSection({ projects }: ProjectsProps) {
  return (
    <Container id="recentProjects">
      <PageTitle
        classN="pageTitle"
        title="Últimos Projetos"
        description="Meus trabalhos"
      />
      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItems
            key={project.slug}
            title={project.title}
            type={project.category}
            slug={project.slug}
            img={project.thumbnail}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
