import styled, { css } from "styled-components";

interface IInputFieldProps {
  width?: string;
}

export const InputField = styled.input<IInputFieldProps>`
  display: flex;

  width: ${({ width }) => !!width ? width : '100%'};

  padding: 0.75rem;

  border: 1px solid ${props => props.theme['base-button']};
  border-radius: 4px;

  background-color: ${props => props.theme['base-input']};
  color: ${props => props.theme['base-text']};



`;