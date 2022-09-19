import { PageTitleProps } from '../../types/types';

import { Container } from './styles';

export function PageTitle({ title, description, classN }: PageTitleProps) {
  return (
    <Container data-aos="fade-right">
      <h1 className={classN}>{title}</h1>
      <h2 className={classN}>{description}</h2>
    </Container>
  );
}
