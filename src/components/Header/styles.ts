import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;

  width: 100%;
  padding: 2rem 10rem;

  justify-content: space-between;
  align-items: center;

  max-width: 90rem;

  img {
    cursor: pointer;
  }
`;

export const ActionsContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 0.75rem;
  
  div:first-child {
    display: flex;
    padding: 0.5rem;

    border-radius: 6px;
    
    background-color: ${props => props.theme['purple-light']};
    gap: 0.25rem;
    
    align-items: center;
    justify-content: center;

    cursor: pointer;
    
    svg {
      color: ${props => props.theme['purple']};
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme['purple-dark']};
      line-height: 1.3;
    }
  }

`;