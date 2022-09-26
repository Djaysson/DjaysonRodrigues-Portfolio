import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  > section {
    width: 100%;
    margin: 1rem 0 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    place-items: center;
    gap: 3rem;

    div:first-child {
      margin-top: -100px;
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 1.8rem;
        font-weight: 500;
        span {
          padding: 2px;
          background: ${props => props.theme.colors.primary};
        }
      }
      p {
        font-size: 1rem;
        font-weight: 400;
        text-indent: 10px;
        margin: 10px 0;
        color: ${props => darken(0.1, props.theme.colors.textLight)};
      }
      div.moreInfo {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 30px 0;
        color: ${props => darken(0.1, props.theme.colors.textLight)};

        span {
          font-size: 1rem;
          font-weight: 400;

          & + span {
            margin-right: 15px;
          }
        }
      }
      div.moreContactInfo {
        width: 85%;
        height: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        > button {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.3rem;
          font-weight: 600;
          width: 150px;
          height: 40px;
          font-size: 1.1rem;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          color: ${props => props.theme.colors.text};
          background: ${props => props.theme.colors.primary};
          transition: all 0.2s;
          &:hover {
            background: ${props => darken(0.1, props.theme.colors.primary)};
          }
          svg {
            width: 1rem;
            height: 1rem;
          }
        }
        > div {
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          &:before {
            content: '';
            height: 2px;
            background: ${props => props.theme.colors.primary};
            width: 40px;
            position: absolute;
            left: -45px;
            top: 50%;
            bottom: 50%;
          }
          &:after {
            content: '';
            height: 2px;
            background: ${props => props.theme.colors.primary};
            width: 40px;
            position: absolute;
            right: -45px;
            top: 50%;
            bottom: 50%;
          }
          > svg {
            cursor: pointer;

            & + svg {
              margin-left: 0.5rem;
            }
            width: 2rem;
            height: 2rem;
            color: ${props => props.theme.colors.primary};
            transition: all 0.2s;
            &:hover {
              color: ${props => darken(0.1, props.theme.colors.primary)};
            }
          }
        }
      }
    }
    div:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      img:nth-child(1) {
        max-height: 40rem;
        max-width: 30rem;
        z-index: 1;
        position: relative;
      }
      img:nth-child(2) {
        max-height: 40rem;
        max-width: 28rem;
        position: absolute;
        top: 5px;
        right: 2px;
        z-index: -1;
      }
    }
  }

  @media (max-width: 1450px) {
    > section {
      div:first-child {
        div.moreInfo {
          flex-direction: column;
          align-items: flex-start;
          margin: 20px 0;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    > section {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      margin: 2rem 0 6rem;
      display: flex;
      flex-direction: column-reverse;
      div:first-child {
        margin-top: -60px;
        h1 {
          font-size: 1.8rem;
          span {
          }
        }
        p {
          margin: 5px 0;
        }

        div.moreInfo {
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin: 15px 0;

          span {
            & + span {
              margin-right: 0;
            }
          }
        }
        div.moreContactInfo {
          width: 100%;
          flex-direction: row;
          > button {
            width: 30%;
            height: 40px;
          }
          > div {
            margin-right: 80px;

            > svg {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
      div:last-child {
        img:nth-child(1) {
          height: 70vh;
          width: 40vh;
        }
        img:nth-child(2) {
          height: 65vh;
          width: 65vw;
          top: -30px;
          right: auto;
          left: auto;
        }
      }
    }
  }
  @media (max-width: 700px) {
    > section {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      margin: 2rem 0 8rem;
      display: flex;
      flex-direction: column-reverse;
      div:first-child {
        margin-top: -60px;
        h1 {
          font-size: 1.7rem;
          span {
          }
        }
        p {
          margin: 5px 0;
        }

        div.moreInfo {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 15px 0;

          span {
            & + span {
              margin-right: 0;
            }
          }
        }
        div.moreContactInfo {
          width: 100%;
          flex-direction: column;

          > button {
            width: 70%;
            height: 40px;
          }
          > div {
            margin: 15px 0;
            > svg {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
      div:last-child {
        img:nth-child(1) {
          height: 70vh;
          width: 40vh;
        }
        img:nth-child(2) {
          height: 65vh;
          width: 65vw;
          top: -30px;
          right: auto;
          left: auto;
        }
      }
    }
  }
  @media (max-width: 450px) {
    > section {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      margin: 2rem 0 10rem;
      display: flex;
      flex-direction: column-reverse;
      div:first-child {
        margin-top: -60px;
        h1 {
          display: flex;
          flex-direction: column;
          font-size: 1.4rem;
          span {
            width: fit-content;
          }
        }
        p {
          margin: 5px 0;
        }

        div.moreInfo {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 15px 0;

          span {
            & + span {
              margin-right: 0;
            }
          }
        }
        div.moreContactInfo {
          width: 100%;
          flex-direction: column;

          > button {
            width: 60%;
            height: 40px;
          }
          > div {
            margin: 15px 0;
            > svg {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
      div:last-child {
        img:nth-child(1) {
          height: 60vh;
          width: 35vh;
        }
        img:nth-child(2) {
          height: 55vh;
          width: 65vw;
          top: -30px;
          right: auto;
          left: auto;
        }
      }
    }
  }
  @media (max-width: 350px) {
    > section {
      grid-template-columns: repeat(1, 1fr);
      place-items: center;
      margin: 2rem 0 12rem;
      display: flex;
      flex-direction: column-reverse;
      div:first-child {
        margin-top: -60px;
        h1 {
          display: flex;
          flex-direction: column;

          font-size: 1.4rem;
          span {
            width: fit-content;
          }
        }
        p {
          margin: 5px 0;
        }

        div.moreInfo {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 15px 0;

          span {
            & + span {
              margin-right: 0;
            }
          }
        }
        div.moreContactInfo {
          width: 100%;
          flex-direction: column;

          > button {
            width: 50%;
            height: 40px;
          }
          > div {
            margin: 15px 0;
            > svg {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
        }
      }
      div:last-child {
        img:nth-child(1) {
          height: 60vh;
          width: 34vh;
        }
        img:nth-child(2) {
          height: 55vh;
          width: 65vw;
          top: -30px;
          right: auto;
          left: auto;
        }
      }
    }
  }
  @media (max-width: 300px) {
    > section {
      div:last-child {
        img:nth-child(1) {
          height: 48vh;
          width: 25vh;
        }
        img:nth-child(2) {
          height: 45vh;
          width: 75vw;
        }
      }
    }
  }
`;
