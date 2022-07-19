import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 100%;
  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  
  flex-direction: column;
  
  padding: 2rem 10rem;
  
  max-width: 90rem;
  
  h2 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${props => props.theme['base-subtitle']};
    line-height: 1.3;
  }
`;

export const ContentCards = styled.div`
  display: grid;
  padding: 3.375rem 0;

  grid-template-columns: repeat(4, 1fr);

  gap: 2.5rem 2rem;
`;