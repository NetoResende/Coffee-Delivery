import styled from "styled-components";

export const Container = styled.div `
  max-width: 1160px;
  padding: 32px 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Aside = styled.aside`
  display: flex;
  gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 4px;
    background: ${props=>props.theme.colors['purple-ligth']};

    svg {
      color: ${props=>props.theme.colors['purple']};
    }

    span {
      color: ${props=>props.theme.colors['purple-dark']};
    }
    padding: 10px 8px;
    border-radius: 6px;
  }
  a {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors['yellow']};
    padding: 8px;
    border-radius: 6px;
    &.active {
      color: ${props =>props.theme.colors['purple-dark']};
    }
  }
  span {
    font-weight: bold;
    color: ${props => props.theme.colors['white']};
    background-color: ${props => props.theme.colors['base-hover']};
    border-radius: 10%;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

  }
`;