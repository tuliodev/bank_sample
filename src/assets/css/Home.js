import styled from 'styled-components';

export const ContentRowDiv = styled.div`
    display: flex; 
    flex-direction: row; 
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    
    
    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ChartDiv = styled.div`
    height: 50vh;
    width: 50vw;
    position: relative;
    margin-top: 13vh;

    @media (max-width: 768px) {
    display: none;
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


        
    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: auto;
  }
`;
