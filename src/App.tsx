import DefaultLayout from '@/modules/layout/components/DefaultLayout';
import { default as React } from 'react';

import { Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <Button>Test</Button>
    </DefaultLayout>
  );
};

export default App;
