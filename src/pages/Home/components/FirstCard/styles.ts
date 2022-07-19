import styled from "styled-components";

import backgroundImg from '../../../../assets/Background.svg';

export const Container = styled.div`
  display: flex;

  background-image: url(${backgroundImg});
  width: 100%;
  
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  padding: 5.75rem 10rem;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  max-width: 90rem;
`;

export const LeftSide = styled.div`
  display: flex;

  flex-direction: column;

  max-width: 90rem;


  h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;
    color: ${props => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;
    
    margin-top: 1rem;
  }
`;

export const ItemsContent = styled.div`
  display: flex;

  gap: 2.5rem;

  section {
    display: flex;
    
    flex-direction: column;
    gap: 1.25rem;

    div {
      display: flex;

      align-items: center;

      gap: 0.75rem;

      svg {
        box-sizing: initial;
        padding: 0.5rem;
        color: ${props => props.theme['background']};

        border-radius: 1000px;
      }

      span {
        line-height: 1.3;
      }
      
    }
  }

  section:first-child {
    div:first-child {
      svg {
        background-color: ${props => props.theme['yellow-dark']};
      }
    }

    div:last-child {
      svg {
        background-color: ${props => props.theme['yellow']};
      }
    }
  }

  section:last-child {
    div:first-child {
      svg {
        background-color: ${props => props.theme['base-text']};
      }
    }

    div:last-child {
      svg {
        background-color: ${props => props.theme['purple']};
      }
    }
  }


  margin-top: 4.125rem;
`;