import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  /* border: 1px solid ${props => props.theme.colors.primary}; */
  > section {
    width: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 1rem;

    div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      img:first-child {
        max-height: 40rem;
        max-width: 30rem;
        z-index: 1;
        position: relative;
      }
      img:last-child {
        max-height: 40rem;
        max-width: 28rem;
        position: absolute;
        top: 5px;
        right: 2px;
        z-index: -1;
      }
    }
    div:nth-child(2) {
      height: 400px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        font-size: 2rem;
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
      div:nth-child(5) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 10px 0;
        color: ${props => darken(0.1, props.theme.colors.textLight)};
        span:first-child {
          font-size: 1rem;
          font-weight: 400;
        }
        span:last-child {
          font-size: 1rem;
          font-weight: 400;
          margin-right: 15px;
        }
      }
      div:nth-child(6) {
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
          border-radius: 5px;
          color: ${props => props.theme.colors.text};
          background: ${props => props.theme.colors.primary};
          transition: all 0.2s;
          &:hover {
            background: ${props => darken(0.1, props.theme.colors.primary)};
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
          > a {
            & + a {
              margin-left: 0.5rem;
            }
            svg {
              font-size: 2rem;
              color: ${props => props.theme.colors.primary};
              transition: all 0.2s;
              &:hover {
                color: ${props => darken(0.1, props.theme.colors.primary)};
              }
            }
          }
        }
      }
    }
  }
`;
