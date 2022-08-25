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
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
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
        font-size: 1.5rem;
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
`;
export const Input = styled.input`
  height: 4rem;
  width: 100%;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1.7rem 1.5rem;
  color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5rem;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${props => darken(0.25, props.theme.colors.primary)};
  }
`;
export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${props => props.theme.colors.inputBackground};
  border: 1px solid ${props => props.theme.colors.border};
  padding: 1.7rem 1.5rem;
  color: ${props => props.theme.colors.primary};
  border-radius: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  transition: 0.5rem;
  resize: none;
  grid-column: 1 / 3;

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
  &::placeholder {
    color: ${props => darken(0.25, props.theme.colors.primary)};
  }
`;
