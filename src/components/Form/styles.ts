import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 5rem auto 0;

  > h1 {
    font-size: 1.7rem;
    font-weight: 500;
    grid-column: 1 / 3;
    margin-bottom: 3rem;
    text-align: center;
  }

  > label {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 1.2rem;
    font-weight: 300;
    & + label[For='message'] {
      margin-bottom: -0.5rem;
    }
  }
  > div {
    margin: 0 auto;
    grid-column: 1 / 3;
    > button {
      border: none;
      padding: 1rem 2.5rem;
      color: ${props => props.theme.colors.text};
      font-size: 1.2rem;
      font-weight: 400;
      border-radius: 0.5rem;
      background: ${props => props.theme.colors.primary};
      transition: 0.5s;
      width: fit-content;
      display: flex;
      align-items: center;
      > svg {
        color: ${props => props.theme.colors.text};
        width: 1.4rem;
        height: 1.4rem;
        margin-left: 0.2rem;
      }
      &:disabled {
        opacity: 0.5;
      }
      &:not(:disabled):hover {
        background: ${props => darken(0.1, props.theme.colors.primary)};
      }
    }
  }
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    > h1 {
      font-size: 1.6rem;
      margin-bottom: 1.2rem;
    }
    > label {
      gap: 0.4rem;
      font-size: 1.1rem;
    }
    > div {
      > button {
        padding: 1rem 1.3rem;
        font-size: 1.1rem;
        > svg {
          width: 1.3rem;
          height: 1.3rem;
        }
      }
    }
  }
  @media (max-width: 350px) {
    display: flex;
    flex-direction: column;
    > h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    > label {
      gap: 0.3rem;
      font-size: 1rem;
    }
    > div {
      > button {
        padding: 1rem 1.2rem;
        font-size: 1.1rem;
        > svg {
          width: 1.3rem;
          height: 1.3rem;
        }
      }
    }
  }
`;
export const Input = styled.input`
  height: 3.5rem;
  width: 100%;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1.7rem 1rem;
  color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  font-size: 1rem;
  outline: none;
  transition: 0.5s;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${props => darken(0.25, props.theme.colors.primary)};
  }
  @media (max-width: 450px) {
    height: 3.3rem;
    padding: 1.4rem 1rem;
    font-size: 0.9rem;
  }
  @media (max-width: 350px) {
    height: 3rem;
    padding: 1.4rem 1rem;
    font-size: 0.9rem;
  }
`;
export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1.7rem 1rem;
  color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1 / 3 !important;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${props => darken(0.25, props.theme.colors.primary)};
  }

  @media (max-width: 450px) {
    height: 8rem;
    padding: 1.7rem 1rem;
    font-size: 0.9rem;
  }
`;
