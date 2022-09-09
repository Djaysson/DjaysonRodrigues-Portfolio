import styled, { keyframes } from 'styled-components';
import img from '../../../assets/images/triangle.png';

const animateDown = keyframes` 
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
`;

const animateUnderline = keyframes` 
   from
  {
  width: 0;
    transform: translateX(0);
  }

to{
    width: 100%;
    transform: translateX(3px);
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 1.5rem;

  > img {
    width: 95vw;
    flex: 1;
    filter: contrast(103%);
  }

  @media (max-width: 700px) {
    margin-top: 6rem;
  }
  @media (max-width: 450px) {
    margin-top: 8rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 220px;
  text-transform: uppercase;
  > h1 {
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.5rem;
    color: ${props => props.theme.colors.primary};
    > span {
      position: relative;
      color: ${props => props.theme.colors.text};
      &:after {
        content: '';
        height: 5px;
        background: ${props => props.theme.colors.primary};
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
        animation: ${animateUnderline} 4.5s ease-in-out infinite alternate;
        animation-delay: 0.5s;
      }
    }
  }
  > h2 {
    font-size: 1.3rem;
    font-weight: 500;
    white-space: nowrap;
    letter-spacing: 0.2rem;
  }
  @media (max-width: 1000px) {
    > h1 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 700px) {
    position: relative;
    top: -220px;
    padding: 0 calc(3.5vw + 5px);
    > h1 {
      font-size: 2.3rem;
      white-space: normal;
      letter-spacing: 0.1rem;
    }
    > h2 {
      font-size: 1.2rem;
      white-space: normal;
      letter-spacing: 0.1rem;
    }
  }

  @media (max-width: 450px) {
    top: -220px;
    > h1 {
      font-size: 1.8rem;
      white-space: normal;
      letter-spacing: 0.1rem;
    }
    > h2 {
      font-size: 1rem;
      white-space: normal;
      letter-spacing: 0.1rem;
    }
  }
  @media (max-width: 350px) {
    top: -170px;
    > h1 {
      font-size: 1.5rem;
    }
    > h2 {
      font-size: 0.8rem;
    }
  }
`;

export const Citation = styled.blockquote`
  width: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 160px;
  padding: 7px 0;

  > strong {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.colors.primary};
  }
  > q {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.5rem 0;
    letter-spacing: 0.05rem;
  }
  > a {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.colors.primary};
    text-align: right;
  }

  @media (max-width: 1000px) {
    width: 40rem;
    bottom: -10px;
  }
  @media (max-width: 700px) {
    width: 35rem;
    position: relative;
    bottom: 50px;
  }
  @media (max-width: 450px) {
    width: 25rem;
    position: relative;
    bottom: 40px;
    padding: 0 calc(3.5vw + 5px);
    > q {
      font-size: 0.8rem;
      letter-spacing: 0.1rem;
      margin: 0.3rem 0;
    }
  }
  @media (max-width: 350px) {
    width: 22rem;
    bottom: 20px;
  }
`;
export const DownArrow = styled.button`
  margin-top: -100px;
  width: 40px;
  height: 40px;
  background: none;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  animation: ${animateDown} infinite 1.5s;
  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.primary};
  }

  &:hover {
    background: ${props => props.theme.colors.primary};
    svg {
      color: ${props => props.theme.colors.text};
    }
  }
  @media (max-width: 1000px) {
    position: relative;
    top: 150px;
  }
  @media (max-width: 700px) {
    position: relative;
    top: 70px;
  }
  @media (max-width: 450px) {
    position: relative;
    top: 70px;
  }
  @media (max-width: 350px) {
    top: 100px;
  }
`;
