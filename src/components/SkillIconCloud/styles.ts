import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 1rem;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    position: relative;
    text-transform: capitalize;
    &:before {
      content: '';
      height: 5px;
      background: ${props => props.theme.colors.primary};
      width: 50px;
      position: absolute;
      left: -57px;
      top: 50%;
      bottom: 50%;
    }
    &:after {
      content: '';
      height: 5px;
      background: ${props => props.theme.colors.primary};
      width: 50px;
      position: absolute;
      right: -57px;
      top: 50%;
      bottom: 50%;
    }
  }

  > div {
    width: 100%;
  }
`;
