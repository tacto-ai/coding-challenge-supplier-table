import { withStyles } from '@/makeStyles';
import { TactoBrandColors } from '@/theme/colors';
import React from 'react';

import { AppBar, Box, Toolbar, Typography } from '@mui/material';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const StyledAppBar = withStyles(AppBar, (theme, props, classes) => ({
  root: {
    backgroundColor: TactoBrandColors['900'],
  },
}));

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coding Challange
          </Typography>
        </Toolbar>
      </StyledAppBar>
      <Box sx={{ mt: 2 }}>{children}</Box>
    </Box>
  );
};

export default DefaultLayout;
