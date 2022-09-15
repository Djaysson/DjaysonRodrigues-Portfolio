import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.2rem;

  @media (max-width: 1000px) {
    margin-top: 5rem;
  }
  @media (max-width: 700px) {
    margin-top: 10rem;
  }
  @media (max-width: 450px) {
    margin-top: 15rem;
  }
  @media (max-width: 350px) {
    margin-top: 20rem;
  }
  @media (max-width: 300px) {
    margin-top: 25rem;
  }
`;
