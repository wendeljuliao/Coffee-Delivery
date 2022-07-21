import styled from "styled-components";

export const SelectStyle = styled.button`
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

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }

`;