import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  > h1 {
    color: ${props => props.theme.colors.text};
    font-size: 4.5rem;
  }
  > h2 {
    color: ${props => props.theme.colors.text};
    font-size: 2.5rem;
    font-weight: 300;
  }
`;
