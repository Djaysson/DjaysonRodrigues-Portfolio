import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }
  > button {
    background: ${props => props.theme.colors.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;

    &:hover {
      background: ${props => darken(0.1, props.theme.colors.primary)};
    }
    a {
      text-transform: uppercase;
      color: ${props => props.theme.colors.text};
      font-size: 1.5rem;
      font-weight: 500;
    }
  }
`;
