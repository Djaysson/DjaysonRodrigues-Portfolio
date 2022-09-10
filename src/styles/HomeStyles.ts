import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    display: flex;
    flex-direction: column;
    gap: 5rem;
  }

  @media (max-width: 1000px) {
    > main {
      gap: 12rem;
    }
  }
  @media (max-width: 700px) {
    > main {
      gap: 10.5rem;
    }
  }
  @media (max-width: 450px) {
    > main {
      gap: 9rem;
    }
  }
  @media (max-width: 350px) {
    > main {
      gap: 10rem;
    }
  }
`;
