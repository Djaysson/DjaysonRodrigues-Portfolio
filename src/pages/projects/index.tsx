import { AllProjectItems } from '../../components/AllProjectItems';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { PageTitle } from '../../components/PageTitle';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

export default function Projects() {
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
        <AllProjectItems
          title="Projeto 01"
          type="website"
          slug="teste"
          imgUrl="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
        />
        <AllProjectItems
          title="Projeto 01"
          type="website"
          slug="teste"
          imgUrl="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
        />
        <AllProjectItems
          title="Projeto 01"
          type="website"
          slug="teste"
          imgUrl="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
        />
        <AllProjectItems
          title="Projeto 01"
          type="website"
          slug="teste"
          imgUrl="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
        />
        <AllProjectItems
          title="Projeto 01"
          type="website"
          slug="teste"
          imgUrl="https://miro.medium.com/max/1400/0*fH0mpJkOPO0HRy6N.jpg"
        />
      </main>
      <Footer />
    </ProjectsContainer>
  );
}
