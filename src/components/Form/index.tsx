import { FaTelegramPlane } from 'react-icons/fa';
import { Container, Input, TextArea } from './styles';

export function Form() {
  return (
    <Container>
      <h1>Preencha o formulário abaixo</h1>

      <label htmlFor="name">
        Seu Nome:
        <Input name="name" type="text" placeholder="Digite aqui" required />
      </label>

      <label htmlFor="email">
        E-mail:
        <Input
          name="email"
          type="email"
          placeholder="Email@exemplo.com.br"
          required
        />
      </label>
      <label htmlFor="phone">
        Telefone:
        <Input name="phone" type="text" placeholder="(99)9999-9999" required />
      </label>
      <label htmlFor="reason">
        Assunto:
        <Input name="Reason" type="text" placeholder="Digite aqui" required />
      </label>

      <label htmlFor="message">Mensagem:</label>
      <TextArea
        name="message"
        placeholder="Digite aqui sua mensagem"
        required
      />
      <div>
        <button type="submit">
          Enviar contato <FaTelegramPlane />
        </button>
      </div>
    </Container>
  );
}
