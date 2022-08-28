import { darken } from 'polished';
import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 30rem;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  position: relative;
  padding: 3rem 5rem;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  > section {
    z-index: 2;
    h1 {
      color: ${props => props.theme.colors.primary};
      font-size: 3rem;
    }
    h2 {
      color: ${props => darken(0.1, props.theme.colors.primary)};
      font-size: 2rem;
      font-weight: 300;
    }
  }

  > div.overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.colors.background};
    opacity: 0.75;
    transition: 0.5s;
  }
`;
