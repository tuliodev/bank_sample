import styled from 'styled-components';

export const ContentRowDiv = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly;
    
    
    @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentColumnDiv = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-top: 2em;

`;

export const Container = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between;
    padding-top: 16px;
`;
