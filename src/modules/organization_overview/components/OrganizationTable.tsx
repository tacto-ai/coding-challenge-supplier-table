import { OrganizationTableRow } from '@/modules/organization_overview/helpers/hooks';
import React from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface OrganizationTableProps {
  rows: Array<OrganizationTableRow>;
}

const OrganizationTable: React.FC<OrganizationTableProps> = ({ rows }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">ID</TableCell>
            <TableCell component="th">Name</TableCell>
            <TableCell component="th"># Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.numberOfUsers}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrganizationTable;
