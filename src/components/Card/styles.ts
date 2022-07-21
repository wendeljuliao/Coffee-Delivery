import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 16rem;
  height: 19.375rem;
  padding: 0 1.25rem;


  background-color: ${props => props.theme['base-card']};

  border-radius: 6px 36px;

  img {
    margin-top: -1.25rem;
  }

  label {
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    
    margin-top: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${props => props.theme['base-label']};
    text-align: center;

    margin-top: 0.5rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;

  gap: 0.25rem;

  margin-top: 0.75rem;

  span {
    box-sizing: initial;

    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    font-weight: bold;
    line-height: 1.3;

    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};

    border-radius: 100px;
  }
`;

export const InfosBuy = styled.div`
  display: flex;

  align-items: center;

  margin-top: 2.0625rem;

  gap: 1.4375rem;

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${props => props.theme['base-text']};
    span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`;

export const ActionsBuy = styled.div`
  display: flex;

  align-items: center;
  
  gap: 0.5rem;

`;