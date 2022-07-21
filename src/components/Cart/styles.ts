import styled from "styled-components";

export const CartStyle = styled.div`
  display: flex;
  padding: 0.5rem;

  border-radius: 6px;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  cursor: pointer;

  
`