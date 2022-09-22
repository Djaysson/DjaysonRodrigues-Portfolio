import { FormEvent, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaTelegramPlane } from 'react-icons/fa';
import { sendContactMail } from '../../services/sendMail';
import theme from '../../styles/theme';
import { Container, Input, TextArea } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (loading) return;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !reason.trim() ||
      !message.trim()
    ) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.colors.error,
          color: theme.colors.text
        }
      });
      return;
    }

    try {
      setLoading(true);

      await sendContactMail(name, email, phone, reason, message);

      setName('');
      setEmail('');
      setPhone('');
      setReason('');
      setMessage('');

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.colors.primary,
          color: theme.colors.text
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.colors.error,
          color: theme.colors.text
        }
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <Container data-aos="fade-up" onSubmit={handleSubmit}>
      <h1>Preencha o formulário abaixo</h1>

      <label htmlFor="name">
        Seu Nome:
        <Input
          name="name"
          type="text"
          placeholder="Digite seu nome aqui"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
      </label>

      <label htmlFor="email">
        E-mail:
        <Input
          name="email"
          type="email"
          placeholder="Digite seu email aqui"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label htmlFor="phone">
        Telefone:
        <Input
          name="phone"
          type="text"
          placeholder="Digite aqui (DDD) 99999-9999"
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
        />
      </label>
      <label htmlFor="reason">
        Assunto:
        <Input
          name="Reason"
          type="text"
          placeholder="Digite o motivo do contato aqui"
          value={reason}
          onChange={({ target }) => setReason(target.value)}
        />
      </label>

      <label htmlFor="message">Mensagem:</label>
      <TextArea
        name="message"
        placeholder="Digite sua mensagem aqui"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />
      <div>
        <button type="submit" disabled={loading}>
          Enviar contato <FaTelegramPlane />
        </button>
      </div>
    </Container>
  );
}
