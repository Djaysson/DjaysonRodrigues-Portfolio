import { ReactNode } from 'react';

import { Container } from './styles';

interface PageTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
  classN?: string;
}

export function PageTitle({ title, description, classN }: PageTitleProps) {
  return (
    <Container>
      <h1 className={classN}>{title}</h1>
      <h2 className={classN}>{description}</h2>
    </Container>
  );
}
