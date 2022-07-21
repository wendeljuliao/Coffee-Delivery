import styled from "styled-components";

export const CartStyle = styled.button`
  display: flex;
  padding: 0.5rem;

  border: 0;
  border-radius: 6px;

  background-color: ${props => props.theme['yellow-light']};
  color: ${props => props.theme['yellow-dark']};
  
  cursor: pointer;

  position: relative;

  div {
    position: absolute;
  
    right: 0;
    top: 0;

    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: ${props => props.theme['yellow-dark']};
    border-radius: 999px;
    
    z-index: 2;

    width: 1.25rem;
    height: 1.25rem;

    margin-right: calc(0px - 1.25rem / 2);
    margin-top: calc(0px - 1.25rem / 2);

  }

  span {
    font-size: 0.75rem;
    font-weight: bold;
    
    color: ${props => props.theme['white']};
    
    line-height: 1.3;
  }
  
  &:disabled {
    opacity: 0.5;

    cursor: not-allowed;
  }
`