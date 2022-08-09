import { Header } from '../components/Header';
import { StartingSection } from '../components/StartingSection';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <StartingSection />
      </main>
    </HomeContainer>
  );
}
