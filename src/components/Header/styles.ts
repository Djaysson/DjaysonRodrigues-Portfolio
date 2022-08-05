import { lighten } from 'polished';
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
  /* border-bottom: 1px solid ${props => props.theme.colors.primary}; */

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 5rem;

    img:nth-child(3) {
      width: 10rem;
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
      height: 2rem;
      padding-bottom: 0.1rem;
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
