import { Article } from '@/api';
import { OrganizationTableRow } from '@/modules/organization_overview/helpers/hooks';
import { TactoFeedbackColors, TactoNeutralColors } from '@/theme/colors';
import React from 'react';

import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Tooltip, Box } from '@mui/material';

interface OrganizationTableProps {
  rows: Array<OrganizationTableRow>;
}

const OrganizationTable: React.FC<OrganizationTableProps> = ({ rows }) => {
  const getInRiskArticleTooltipText = (inRiskArticles: Article[]) => inRiskArticles.map((article) => `${article.id} - ${article.name}`).join(', ');

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th">ID</TableCell>
            <TableCell component="th">Name</TableCell>
            <TableCell component="th"># Users</TableCell>
            <TableCell component="th">Contact Person</TableCell>
            <TableCell component="th">Articles</TableCell>
            <TableCell component="th">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.numberOfUsers}</TableCell>
              <TableCell>{row.contactPerson ? `${row.contactPerson.firstName} ${row.contactPerson.lastName} (${row.contactPerson.email})` : '-'}</TableCell>
              <TableCell>{row.articleCount}</TableCell>
              <TableCell>
                {row.inRiskArticles.length > 0 && (
                  <Tooltip title={`High Supplier Risk:  Article ${getInRiskArticleTooltipText(row.inRiskArticles)}`}>
                    <Chip
                      icon={
                        <Box
                          sx={{
                            width: 16,
                            height: 16,
                            backgroundColor: TactoNeutralColors.white,
                            borderRadius: '50%',
                            display: 'inline-flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <AccessAlarmIcon sx={{ width: 12, height: 12, color: TactoFeedbackColors.error.main }} />
                        </Box>
                      }
                      label="Article"
                      color="error"
                      size="small"
                    />
                  </Tooltip>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrganizationTable;
