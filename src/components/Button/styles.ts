import styled from "styled-components";


export const ButtonContainer = styled.button`
  display: flex;

  padding: 0.75rem 0.5rem;
  width: 100%;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme['yellow']};

  border: 0;
  border-radius: 6px;
  
  cursor: pointer;

  transition: background-color 0.2s;

  font-size: 0.875rem;
  line-height: 1.6;
  color: ${props => props.theme['white']};
  font-weight: bold;

  &:not(:disabled):hover {
    background-color: ${props => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`;