import styled from 'styled-components';
import { Input } from '@mui/material';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    flex-direction: row;
    margin-top: 20px;
    border: 1px solid #d4d4d4;
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
    font-size: 25px !important;
`;

export const Users = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    max-width: 40%;
    height: 100%;
`;

export const UsersAvatar = styled.img`
    width: 35px;
    height: 35px;
    border-radius:150px;
    margin-top: 70%;
    margin-right: 5px;
`;
