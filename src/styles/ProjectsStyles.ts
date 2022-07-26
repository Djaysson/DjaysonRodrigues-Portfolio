import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  > div {
    padding-top: 0.5rem;
  }
  > main {
    margin: 2rem 0;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 1200px) {
    > main {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 1000px) {
    > main {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    > main {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
