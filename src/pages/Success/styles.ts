import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  width: 100%;

  padding: 5rem 10rem;

  max-width: 90rem;

  flex-direction: column;
  line-height: 1.3;

  > section {
    display: flex;

    flex-direction: column;

    gap: 0.25rem;
  }

  gap: 1.75rem;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;

    color: ${props => props.theme['yellow-dark']};
  }

  span {
    font-size: 1.25rem;

    color: ${props => props.theme['base-subtitle']};
  }
`;

export const Content = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-between;
  align-items: center;
  
`;

export const BorderInfosOrder = styled.div`
  display: flex;
  width: 32.875rem;
  height: 16.875rem;

  justify-content: center;
  align-items: center;
  
  background: linear-gradient(90deg, #DBAC2C, #8047F8);

  border-radius: 6px 36px;
`;


export const InfosOrder = styled.div`
  display: flex;

  width: calc(100% - 2px);
  height: calc(100% - 2px);

  flex-direction: column;

  background-color: ${props => props.theme['background']};

  padding: 2.5rem;

  border-radius: 6px 36px;

  gap: 2rem;

  div {
    display: flex;
    width: 100%;

    gap: 0.75rem;

    line-height: 1.3;    

    strong {
      font-weight: bold;
    }

    svg {
      padding: 0.5rem;
      border-radius: 1000px;
      
      color: ${props => props.theme['background']};
    }
  }

  div:first-child {
    svg {
      background-color: ${props => props.theme['purple']};
    }
  }

  div:nth-child(2){
    svg {
      background-color: ${props => props.theme['yellow']};
    }
  }

  div:last-child {
    svg {
      background-color: ${props => props.theme['yellow-dark']};
    }
  }


`;
