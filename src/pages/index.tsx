import { AboutSection } from '../components/Sections/AboutSection';
import { Header } from '../components/Header';
import { StartingSection } from '../components/Sections/StartingSection';
import { HomeContainer } from '../styles/HomeStyles';
import { ProjectsSection } from '../components/Sections/ProjectsSection';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <StartingSection />
        <AboutSection />
        <ProjectsSection />
      </main>
    </HomeContainer>
  );
}
