import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1em;
    width: 85%;
    
    @media (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const Text = styled.p`
    align: left;
    font-size: 1.5em;

`;

export const SubContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media (max-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }
`;
