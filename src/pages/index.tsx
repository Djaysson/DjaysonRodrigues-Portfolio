import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import Head from 'next/head';

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
      <Head>
        <title>Home | Portfólio djayson rodrigues</title>
        <meta
          name="description"
          content="Portfólio do djayson rodrigues,programador e desenvolvedor Front-end djayson rodrigues, este é meu site pessoal. Você pode dar uma olhada em meu portfólio, baixar meu CV e ver como você pode entrar em contato comigo!"
        />
        <meta
          property="og:title"
          content="Home | portfólio djayson rodrigues"
        />
        <meta
          property="og:description"
          content="Portfólio do djayson rodrigues,programador e desenvolvedor Front-end djayson rodrigues, este é meu site pessoal. Você pode dar uma olhada em meu portfólio, baixar meu CV e ver como você pode entrar em contato comigo!"
        />
        <meta property="og:url" content="https://djaysonrodrigues.vercel.app" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="portfólio djayson rodrigues" />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:url" content="djaysonrodrigues.vercel.app" />
        <meta
          name="twitter:title"
          content="Home | portfólio djayson rodrigues"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="portfólio djayson rodrigues" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
      </Head>
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
