import { Form } from '../../Form';
import { PageTitle } from '../../PageTitle';
import { Container } from './styles';

export function ContactSection() {
  return (
    <Container>
      <PageTitle
        classN="pageTitle"
        title="Fale Comigo"
        description="Entraremos em contato em breve"
      />

      <Form />
    </Container>
  );
}
