import axios from 'axios';

export const sendContactMail = async (
  name: string,
  email: string,
  phone: string,
  reason: string,
  message: string
) => {
  const data = {
    name,
    email,
    phone,
    reason,
    message
  };

  try {
    return await axios.post('/api/contact', data);
  } catch (err) {
    return err;
  }
};
