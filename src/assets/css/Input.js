import styled from 'styled-components';
import { Input } from '@mui/material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    margin-top: 20px;
    border: 1px solid gray;
    border-radius: 14px;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding-left: 16px;
`;

export const InputLabel = styled.p`
    color: #798BA3;
`;

export const StyledInput = styled(Input)`
    color: #3D424B;
    border: 0;
    margin: 5px;
`;

export const Users = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 50%;
    height: 100%;

`;

export const UsersAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius:100px;
    background: #000;
    margin-top: 50%;
`;
