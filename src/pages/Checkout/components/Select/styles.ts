import styled, { css } from "styled-components";

interface ISelectStyleProps {
  methodPayment: string | null;
}

export const SelectStyle = styled.button<ISelectStyleProps>`
  display: flex;
  flex: 1;
  
  padding: 1rem;
  
  align-items: center;

  background-color: ${props => props.theme['base-button']};
  
  border: 0;
  border-radius: 6px;

  gap: 0.75rem;

  transition: background-color 0.2s;

  cursor: pointer;

  svg {
    color: ${props => props.theme['purple']};
  }

  label {
    font-size: 0.75rem;
    line-height: 1.6;
    font-weight: 400;

    color: ${props => props.theme['base-text']};

    cursor: pointer;
  }

  &:not(:disabled):hover {
    background-color: ${props => props.theme['base-hover']};
  }

  ${({name, methodPayment}) => name === methodPayment && css`
    border: 1px solid ${props => props.theme['purple']};
    background-color: ${props => props.theme['purple-light']};
    padding: calc(1rem - 1px);
  `};

`;