import { Form } from '../../Form';
import { PageTitle } from '../../PageTitle';
import { Container } from './styles';

export function ContactSection() {
  return (
    <Container id="contact">
      <PageTitle
        classN="pageTitle"
        title="Fale Comigo"
        description="Em breve entrarei em contato"
      />

      <Form />
    </Container>
  );
}
