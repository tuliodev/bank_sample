/* eslint-disable no-nested-ternary */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { NameContainer, UserAvatar } from '../assets/css/TransactionsTable';
import StatusButton from './StatusButton';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'date', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'card',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'value',
    minWidth: 170,
    align: 'center',
  },
  {
    id: 'status',
    minWidth: 170,
    align: 'right',
  },
];

const rows = [
  {
    name: 'Sent to Tulio', date: 'Jan 16, 2023', card: '******87212', value: '-R$853.00', status: 'Success',
  },
  {
    name: 'Sent to Tulio', date: 'Jan 16, 2023', card: '******87212', value: '-R$853.00', status: 'Pending',
  },
  {
    name: 'Sent to Tulio', date: 'Jan 16, 2023', card: '******87212', value: '-R$853.00', status: 'Success',
  },

];

export default function TransactionsTable() {
  return (
    <Paper sx={{ width: '90%', boxShadow: 'none' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="left" colSpan={2} style={{ borderBottom: 'none', fontSize: '1.5em' }}>
                Recent Transactions
              </TableCell>
              <TableCell
                align="right"
                colSpan={3}
                style={{
                  borderBottom: 'none', fontSize: '0.8em', color: '5E636A',
                }}
              >
                View all
                {' >'}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align} style={{ borderBottom: 'none' }}>
                        {column.id === 'name'
                          ? (
                            <NameContainer>
                              <UserAvatar />
                              <p>Sent to Tulio</p>
                            </NameContainer>
                          )
                          : column.id === 'status'
                            ? <StatusButton status={row.status} />
                            : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
