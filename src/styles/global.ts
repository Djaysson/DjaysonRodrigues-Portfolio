import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.4, theme.colors.primary)};
    }
  }
  @media (max-width: 1080px) {
  html {
    font-size: 93.75%; //15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; //14px
    }
  }

  body {
    color: ${props => props.theme.colors.text};
    background: linear-gradient(to right,#161C22 30%, #21272F 30%);
    
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Lato','Raleway', sans-serif;
  }

  button {
  cursor: pointer;
  }

  a {
  text-decoration: none;
  }

  .container{
    width: 100%;
    margin:  0 auto;
    max-width: 85rem;
    padding: 0 calc(3.5vw + 5px);
   

    @media(max-width:1450px){
      max-width: 80rem;
    }
    @media(max-width:1080px){
      max-width: 50rem;
    }
    @media(max-width:700px){
      padding: 0 calc(3.5vw + 5px);
    }
  }
`;
