import Link from 'next/link';
import { AllProjectItemsProps } from '../../types/types';
import { Container } from './styles';

export function AllProjectItems({
  title,
  type,
  slug,
  imgUrl
}: AllProjectItemsProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
