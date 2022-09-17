import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 calc(3.5vw + 5px);
  > div.title {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    > a svg {
      color: ${props => props.theme.colors.text};
      width: 2rem;
      height: 2rem;
      transition: 0.2s;

      &:hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
  > main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 5rem;

    div:nth-child(1) {
      > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        margin: 1rem 0;
        img {
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
        }
        h2 {
          font-size: 1.7rem;
          font-weight: 500;
          span {
            color: ${props => props.theme.colors.primary};
          }
        }
      }
      > ul {
        list-style: none;
        li {
          font-size: 1.2rem;
          font-weight: 700;

          & + li {
            margin-top: 0.7rem;
          }
          span {
            font-size: 1rem;
            margin-left: 0.5rem;
            color: ${props => darken(0.1, props.theme.colors.textLight)};
          }
          > a {
            color: ${props => props.theme.colors.primary};
            transition: 0.2s;
            &:hover {
              color: ${props => darken(0.2, props.theme.colors.primary)};
            }
          }
        }
      }
    }
    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      margin-top: 2rem;
      button {
        background: ${props => props.theme.colors.primary};
        padding: 0.8rem 3rem;
        border-radius: 0.5rem;
        border: none;
        transition: 0.5s;
        margin-top: 2rem;

        &:hover {
          background: ${props => darken(0.1, props.theme.colors.primary)};
        }
        a {
          color: ${props => props.theme.colors.text};
          font-size: 1.4rem;
          font-weight: 300;
          text-transform: uppercase;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    > main {
      div:nth-child(2) {
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;

        button {
          padding: 1rem 2rem;
          margin-top: 1rem;

          a {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
  @media (max-width: 700px) {
    > main {
      div:nth-child(2) {
        flex-direction: row;
        gap: 1rem;
        margin-top: 1rem;

        button {
          padding: 1rem 2rem;
          margin-top: 1rem;

          a {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    > div.title {
      padding: 0.5rem 0;
    }
    > main {
      padding: 1rem 1.2rem;

      div:nth-child(1) {
        > div {
          justify-content: center;
          gap: 0.3rem;
          img {
            width: 2rem;
            height: 2rem;
          }
          h2 {
            font-size: 1.4rem;
          }
        }
        > ul {
          li {
            display: flex;
            flex-direction: column;
            font-size: 1.1rem;
            font-weight: 700;

            & + li {
              margin-top: 1rem;
            }
            span {
              font-size: 1rem;
              margin-top: 0.2rem;
            }
          }
        }
      }
      div:nth-child(2) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;

        button {
          padding: 1rem 2rem;
          margin-top: 1rem;

          a {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
  @media (max-width: 350px) {
    > main {
      div:nth-child(2) {
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;

        button {
          padding: 1rem 2rem;
          margin-top: 1rem;

          a {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
