import Link from 'next/link';
import { Container } from './styles';

interface AllProjectItemsProps {
  title: string;
  type: string;
  slug: string;
  imgUrl: string;
}

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
