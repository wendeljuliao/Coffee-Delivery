import styled, { css } from "styled-components";

interface ICounterStyleProps {
  disabledMinus: boolean;
}

export const CounterStyle = styled.div<ICounterStyleProps>`
  display: flex;

  width: 4.5rem;

  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme['base-button']};
  padding: 0.5rem;

  border-radius: 6px;

  span {
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }
  
  svg {
    color: ${props => props.theme['purple']};
    cursor: pointer;
    
    transition: color 0.2s;
    
    &:hover {
      color: ${props => props.theme['purple-dark']};
    }

    transition: opacity 0.2s;
  }

  svg:first-child {
    ${({disabledMinus}) => disabledMinus && css`
      opacity: 0.3;
    `};
  }

`;