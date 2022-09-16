import { FaTelegramPlane } from 'react-icons/fa';
import { Container, Input, TextArea } from './styles';

export function Form() {
  return (
    <Container>
      <h1>Preencha o formulário abaixo</h1>

      <label htmlFor="name">
        Seu Nome:
        <Input
          name="name"
          type="text"
          placeholder="Digite seu nome aqui"
          required
        />
      </label>

      <label htmlFor="email">
        E-mail:
        <Input
          name="email"
          type="email"
          placeholder="Digite seu email aqui"
          required
        />
      </label>
      <label htmlFor="phone">
        Telefone:
        <Input
          name="phone"
          type="text"
          placeholder="Digite seu telefone aqui"
          required
        />
      </label>
      <label htmlFor="reason">
        Assunto:
        <Input
          name="Reason"
          type="text"
          placeholder="Digite o motivo do contato aqui"
          required
        />
      </label>

      <label htmlFor="message">Mensagem:</label>
      <TextArea
        name="message"
        placeholder="Digite sua mensagem aqui"
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
