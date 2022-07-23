import styled, { css } from "styled-components";

interface IInputFieldProps {
  width?: string;
}

interface ContainerOpcionalProps {
  isEmpty: boolean;
}

export const InputField = styled.input<IInputFieldProps>`
  display: flex;

  width: ${({ width }) => !!width ? width : '100%'};

  padding: 0.75rem;

  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;

  background-color: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};

  &::placeholder {
    color: ${props => props.theme['base-label']};
  }

  &:focus-within::placeholder {
    color: transparent;
  }

  &:focus-within {
    border: 1px solid ${props => props.theme['yellow-dark']};
  }

`;

export const ContainerOpcional = styled.div<ContainerOpcionalProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  
  ${({isEmpty}) => isEmpty && css`
    &:not(:focus-within)::after {
      content: "Opcional";
      margin-right: 0.75rem;

      font-size: 0.75rem;
      font-style: italic;
      color: ${props => props.theme['base-label']};
      line-height: 1.3;

      position: absolute;
      right: 0;
    }
  `};

`;