import styled from "styled-components";

export const CheckoutContainer = styled.form`
  display: flex;

  align-items: flex-start;
  justify-content: center;

  width: 100%;

  gap: 2rem;
  padding: 2.5rem 10rem;

  max-width: 90rem;
  
  h2 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    color: ${props => props.theme['base-subtitle']};
  }
  `;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 40rem;

  gap: 0.9375rem;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 28rem;

  gap: 0.9375rem;
`;

export const InfosOrder = styled.div`
  display: flex;

  flex-direction: column;

  width: 100%;
  gap: 0.75rem;
`;

export const BaseContent = styled.div`
  display: flex;
  
  padding: 2.5rem;
  gap: 2rem;
  width: 100%;
  
  flex-direction: column;
  
  background-color: ${props => props.theme['base-card']};
  border-radius: 6px;
`;

export const AddressContent = styled(BaseContent)`

  svg {
    color: ${props => props.theme['yellow-dark']};
  }


  .inputs {
    display: flex;

    flex-direction: column;

    gap: 1rem;
    
    div {
      display: flex;
      gap: 0.75rem;
    }

  }

`;

export const PaymentContent = styled(BaseContent)`
  svg {
    color: ${props => props.theme['purple']};
  }

  .payment-methods {
    display: flex;
    
    gap: 0.75rem;
  }
`;

export const HeaderContent = styled.section`
  display: flex;

  gap: 0.5rem;
  div {
    display: flex;
    flex-direction: column;
    
    line-height: 1.3;

    h3 {
      color: ${props => props.theme['base-subtitle']};
      font-weight: 400;
    }
    
    span {
      font-size: 0.875rem;
    }
  }
`;

export const InfosCoffees = styled.div`
  display: flex;

  width: 100%;
  padding: 2.5rem;

  flex-direction: column;

  background-color: ${props => props.theme['base-card']};

  border-radius: 6px 44px;

  gap: 1.5rem;
`;

export const Separator = styled.div`
  flex: 1;

  width: 23rem;

  border: 1px solid ${props => props.theme['base-button']};
`;

export const InfosPrice = styled.div`
  display: flex;

  flex-direction: column;

  gap: 0.75rem;

  line-height: 1.3;

  div {
    display: flex;

    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
      color: ${props => props.theme['base-text']};
    }

    strong {
      font-size: 1.25rem;
      font-weight: bold;
      color: ${props => props.theme['base-subtitle']};
    }
  }
`;