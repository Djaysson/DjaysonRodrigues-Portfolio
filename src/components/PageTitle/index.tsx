import { ReactNode } from 'react';

import { Container } from './styles';

interface PageTitleProps {
  title: string | ReactNode;
  description: string | ReactNode;
}

export function PageTitle({ title, description }: PageTitleProps) {
  return (
    <Container>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </Container>
  );
}
