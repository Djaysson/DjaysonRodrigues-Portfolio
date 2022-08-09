import styled, { keyframes } from 'styled-components';

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
  height: 85vh;
  margin-bottom: 20px;
  > img {
    width: 90vw;
    flex: 1;
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

    > span {
      position: relative;
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
`;

export const Citation = styled.div`
  width: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  bottom: 170px;
  padding: 10px;

  > strong {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.colors.primary};
  }
  > i {
    font-size: 0.9rem;
    font-weight: 300;
    margin: 0.5rem 0;
  }
  > a {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    color: ${props => props.theme.colors.primary};
    text-align: right;
  }
`;
export const DownArrow = styled.button`
  margin-top: -150px;
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
`;
