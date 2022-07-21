import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;

  width: 100%;
  padding: 0.5rem 0.25rem;

  justify-content: space-between;

  background-color: ${props => props.theme['base-card']};

  > span {
    font-weight: bold;
    line-height: 1.3;
  }
`;

export const InfoCard = styled.div`
  display: flex;

  gap: 1.25rem;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;

    > span {
      color: ${props => props.theme['base-subtitle']};
      line-height: 1.3;
    }

    flex-direction: column;
    gap: 0.5rem;
    
    .actions {
      display: flex;
      gap: 0.5rem;

      div {
        height: 2rem;
      }
    }
  }
`;