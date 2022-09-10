import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  > h1 {
    color: ${props => props.theme.colors.text};
    font-size: 4rem;
    &.pageTitle:before {
      content: '#';
      height: 5px;
      color: ${props => props.theme.colors.primary};
    }
  }
  > h2 {
    color: ${props => props.theme.colors.text};
    font-size: 2rem;
    font-weight: 300;
    line-height: 35px;
    margin: -10px 0 5px 60px;
    align-items: center;
    position: relative;

    &.pageTitle:before {
      content: '';
      height: 5px;
      background: ${props => props.theme.colors.primary};
      width: 50px;
      position: absolute;
      left: -55px;
      top: 50%;
      bottom: 50%;
    }
    &.pageTitle:after {
      content: '';
      height: 5px;
      background: ${props => props.theme.colors.primary};
      width: 50px;
      position: absolute;
      right: -55px;
      top: 50%;
      bottom: 50%;
    }
  }
  @media (max-width: 700px) {
    > h1 {
      font-size: 3.5rem;
    }
    > h2 {
      font-size: 1.7rem;

      &.pageTitle:before {
        height: 3px;
        width: 30px;
        left: -35px;
      }
      &.pageTitle:after {
        height: 3px;
        width: 30px;
        right: -35px;
      }
    }
  }
  @media (max-width: 450px) {
    gap: 0.1rem;

    > h1 {
      font-size: 2.5rem;
    }
    > h2 {
      font-size: 1.4rem;

      &.pageTitle:before {
        height: 3px;
        width: 30px;
        left: -35px;
      }
      &.pageTitle:after {
        height: 3px;
        width: 30px;
        right: -35px;
      }
    }
  }
  @media (max-width: 350px) {
    > h1 {
      font-size: 2rem;
    }
    > h2 {
      font-size: 1rem;

      &.pageTitle:before {
        height: 2px;
        width: 30px;
        left: -35px;
      }
      &.pageTitle:after {
        height: 2px;
        width: 30px;
        right: -35px;
      }
    }
  }
`;
