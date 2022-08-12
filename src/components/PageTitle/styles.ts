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
`;
