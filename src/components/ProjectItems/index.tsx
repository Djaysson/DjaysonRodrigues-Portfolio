import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Container } from './styles';

import { ProjectItemsProps } from '../../types/types';

export function ProjectItems({ title, type, slug, img }: ProjectItemsProps) {
  return (
    <Container imgUrl={img}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>#{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>
      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </Container>
  );
}
