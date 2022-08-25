import { darken } from 'polished';
import styled, { keyframes } from 'styled-components';

const animateUp = keyframes` 
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(3);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(0px);
  }
`;

export const Container = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10rem;
  padding: 0 calc(3.5vw + 5px);
  div.logoContainer {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;

    margin-bottom: 1rem;
    > img {
      width: 12rem;
    }
    > div {
      width: 100%;
      border: 1px solid ${props => props.theme.colors.primary};
    }
  }
  > p {
    padding: 0.2rem 0;
    color: ${props => darken(0.2, props.theme.colors.textLight)};
  }

  > div.container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    > button {
      background: none;
      border: none;
      animation: ${animateUp} infinite 1.5s;
      svg {
        color: ${props => props.theme.colors.primary};
        width: 3.5rem;
        height: 3.5rem;
        transition: 0.5s;
        &:hover {
          color: ${props => darken(0.1, props.theme.colors.primary)};
        }
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        color: ${props => props.theme.colors.primary};
        width: 2rem;
        height: 2rem;
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          color: ${props => darken(0.1, props.theme.colors.primary)};
        }
      }
    }
  }
`;
