import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .slick-slider {
    margin: 2rem auto;
    width: 70%;

    > .slick-dots li.slick-active button:before {
      color: ${props => props.theme.colors.primary};
    }
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;
export const SkillCard = styled.div`
  background: ${props => darken(0.01, props.theme.colors.background)};
  border-radius: 10px;
  padding: 25px;

  > h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.5rem 0;

    text-align: center;
  }
  > div {
    display: flex;
    flex-direction: row;

    align-items: center;
    gap: 1rem;

    svg {
      width: 6rem;
      height: 6rem;
      color: ${props => props.theme.colors.primary};
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      width: 100%;
      text-align: left;
      text-indent: 0.3rem;
      color: ${props => darken(0.1, props.theme.colors.textLight)};
    }
  }
  @media (max-width: 450px) {
    padding: 5px;
    min-height: 16rem;

    > h2 {
      font-size: 1.4rem;
    }
    > div {
      flex-direction: column;

      svg {
        width: 4rem;
        height: 4rem;
      }
      p {
        width: 95%;
        text-align: center;
        text-indent: 0.5rem;
      }
    }
  }
  @media (max-width: 350px) {
    padding: 5px;
    min-height: 18rem;

    > h2 {
      font-size: 1.3rem;
    }
    > div {
      flex-direction: column;

      svg {
        width: 3.5rem;
        height: 3.5rem;
      }
      p {
        width: 90%;
        text-align: center;
        text-indent: 0.5rem;
      }
    }
  }
`;
