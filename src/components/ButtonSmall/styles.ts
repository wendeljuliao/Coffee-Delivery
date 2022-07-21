import styled from "styled-components";


export const ButtonContainer = styled.button`
  display: flex;

  padding: 0.5rem;
  width: 5.6875rem;

  align-items: center;

  background-color: ${props => props.theme['base-button']};

  gap: 0.25rem;

  border: 0;
  border-radius: 6px;
  
  cursor: pointer;

  transition: background-color 0.2s;

  svg {
    color: ${props => props.theme['purple']};
  }

  span {
    font-size: 0.75rem;
    line-height: 1.6;
    color: ${props => props.theme['base-text']};
  }

  &:hover {
    background-color: ${props => props.theme['base-hover']};
  }
`;