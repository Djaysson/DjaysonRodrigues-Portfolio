import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';

import { Header } from '../components/Header';
import { AboutSection } from '../components/Sections/AboutSection';
import { StartingSection } from '../components/Sections/StartingSection';
import { ProjectsSection } from '../components/Sections/ProjectsSection';
import { ContactSection } from '../components/Sections/ContactSection';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import { HomeProps } from '../types/types';

import { HomeContainer } from '../styles/HomeStyles';
import 'aos/dist/aos.css';

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <StartingSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
      <Footer />
    </HomeContainer>
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
