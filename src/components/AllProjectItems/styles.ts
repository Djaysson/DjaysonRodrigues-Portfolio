import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.div<ProjectProps>`
  > a {
    position: relative;
    width: 100%;

    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;

    height: 15rem;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${props => props.theme.colors.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${props => props.theme.colors.primary};
      > div.overlay {
        opacity: 0.5;
      }
    }

    > section {
      z-index: 2;
      h1 {
        color: ${props => props.theme.colors.primary};
        font-size: 1.5rem;
      }
      h2 {
        color: ${props => darken(0.01, props.theme.colors.primary)};
        font-size: 1.2rem;
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
  }
`;
