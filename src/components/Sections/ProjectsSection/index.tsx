import Link from 'next/link';
import { PageTitle } from '../../PageTitle';
import { ProjectItems } from '../../ProjectItems';
import { Container } from './styles';

export function ProjectsSection() {
  return (
    <Container>
      <PageTitle
        classN="pageTitle"
        title="Últimos Projetos"
        description="Meus trabalhos"
      />
      <section>
        <ProjectItems
          title="Projeto 1"
          type="Website"
          slug="teste"
          img="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
        />
        <ProjectItems
          title="Projeto 2"
          type="Website"
          slug="teste"
          img="https://i.pinimg.com/originals/ff/44/cd/ff44cddb751805f4bab71d8e33b5ff7d.jpg"
        />
        <ProjectItems
          title="Projeto 3"
          type="Website"
          slug="teste"
          img="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107fe6084b38d8aab606b3_6002086f72b727c25f01dfaf_6hJsaUMSwwUejjp5a0zXu5BRHLhuuzdOilHegDIKPK4uw4MkYlW8qWql3-0Ey-g05SF-kXfQY1hWQ61agpkxW0FMU4w5P9QrIwqYWFWsingciUWlcdMSNIhR9uIbQ1apSL56FA0_.png"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
