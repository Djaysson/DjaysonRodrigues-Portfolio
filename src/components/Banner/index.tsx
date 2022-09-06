import { BannerProps } from '../../types/types';
import { Container } from './styles';

export function Banner({ title, type, imgUrl }: BannerProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
