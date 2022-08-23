import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-items: center;
  gap: 1rem;

  > h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 3rem;

    position: relative;
    top: 23px;
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
`;
export const SkillCard = styled.div`
  width: 100%;
  height: 200px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 0 0.2rem ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 20px;

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    svg {
      font-size: 7rem;
      color: ${props => props.theme.colors.primary};
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      width: 80%;
      text-align: left;
      text-indent: 0.3rem;
      color: ${props => darken(0.1, props.theme.colors.textLight)};
    }
  }
`;
