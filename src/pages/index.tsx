import { Header } from '../components/Header';
import { AboutSection } from '../components/Sections/AboutSection';
import { StartingSection } from '../components/Sections/StartingSection';
import { ProjectsSection } from '../components/Sections/ProjectsSection';
import { HomeContainer } from '../styles/HomeStyles';
import { ContactSection } from '../components/Sections/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <StartingSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </HomeContainer>
  );
}
