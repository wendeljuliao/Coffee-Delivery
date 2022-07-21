import styled from "styled-components";

export const IconButtonStyle = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  background-color: ${props => props.theme['purple-dark']};
  border-radius: 6px;

  cursor: pointer;

  transition: background-color 0.2s;

  svg {
    color: ${props => props.theme['base-card']};
  }

  &:hover {
    background-color: ${props => props.theme['purple']};
  }
`;