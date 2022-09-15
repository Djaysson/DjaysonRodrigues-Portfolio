import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  #canvas-stable-id-for-csr-ssr {
    margin: 0 auto;
    width: 50%;
    filter: contrast(1.7);
  }

  @media (max-width: 1000px) {
    #canvas-stable-id-for-csr-ssr {
      width: 80%;
      margin: 1.9rem auto;
    }
  }
  @media (max-width: 700px) {
    #canvas-stable-id-for-csr-ssr {
      width: 85%;
      margin: 1.6rem auto;
    }
  }
  @media (max-width: 450px) {
    #canvas-stable-id-for-csr-ssr {
      width: 100%;
      margin: 1.3rem auto;
    }
  }
  @media (max-width: 350px) {
    #canvas-stable-id-for-csr-ssr {
      width: 100%;
      margin: 1rem auto;
    }
  }
`;
