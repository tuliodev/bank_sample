import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {
  BalanceDiv, BalanceText, ActionWrapper,
} from '../assets/styles/TransferForm';
import Input from './Input';
// import ActionWrapper from './ActionWrapper';
import QuickTransferOption from './QuickTransferOption';

export default function TransferForm() {
  return (
    <Box
      sx={{
        width: 300,
        height: 400,
        // boxShadow: 1,
        borderRadius: 2,
        padding: 2,
        border: '0.5px solid #d4d4d4',
      }}
    >
      <Typography variant="h6" component="h6">Quick transfer</Typography>

      <BalanceDiv>
        <PaidIcon style={{ color: 'green', fontSize: '3.5em' }} />
        <BalanceText>R$13.900,00</BalanceText>
      </BalanceDiv>

      <Input />

      <ActionWrapper>
        <QuickTransferOption icon={<LocalAtmIcon style={{ color: 'A789FF', fontSize: '2em' }} />} label="Send" />
        <QuickTransferOption icon={<CallReceivedIcon style={{ color: '83DEA4', fontSize: '2em' }} />} label="Receive" />
        <QuickTransferOption icon={<ReceiptIcon style={{ color: 'FCE37E', fontSize: '2em' }} />} label="Invoicing" />
        <QuickTransferOption icon={<MoreHorizIcon style={{ color: '436CFB', fontSize: '2em' }} />} label="More" />
      </ActionWrapper>
    </Box>

  );
}
