import { darken, lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8rem;

  background: ${props => props.theme.colors.background};
  nav {
    ul {
      display: flex;
      align-items: center;
      list-style: none;
      gap: 5rem;

      > img {
        width: 10rem;
      }
    }
  }

  @media (max-width: 1450px) {
    nav {
      ul {
        gap: 7rem;

        > img {
          width: 10.5rem;
        }
      }
    }
  }
  @media (max-width: 1000px) {
    nav {
      ul {
        gap: 4rem;

        > img {
          width: 9.5rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    height: 5rem;
    nav {
      width: 50vw;
      height: 70vh;
      margin-top: 5rem;
      position: absolute;
      border-radius: 0 0 30% 0;
      border-right: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      transform: translateX(-999px);

      top: 0;
      left: 0;
      background: ${props => props.theme.colors.background};
      transition: all 0.5s;
      z-index: 3;
      &.open {
        transform: translateX(-10px);
      }
      ul {
        gap: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        margin-top: 1rem;
        > img {
          display: none;
        }
      }
    }
  }
`;
export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;

    padding: 10px;
    color: ${props =>
      props.isActive
        ? props.theme.colors.primary
        : props.theme.colors.textHighlight};
    transition: 0.5s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.2, props.theme.colors.primary)
          : lighten(0.2, props.theme.colors.textHighlight)};
    }
    img {
      width: 2rem;
      height: 2rem;
      padding-bottom: 0.12rem;
    }
    span {
      position: relative;
      &:after {
        content: '';
        height: 2px;
        background: ${props => props.theme.colors.primary};
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

export const MobileNavBar = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  @media (max-width: 700px) {
    display: flex;
    flex: 1;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc(3.5vw + 5px);

    > button {
      border: none;
      background: none;

      svg {
        width: 3rem;
        height: 3rem;
        color: ${props => props.theme.colors.primary};
      }
    }

    a {
      img {
        width: 8rem;
      }
    }
  }
`;
