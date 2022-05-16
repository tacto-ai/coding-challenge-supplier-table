import DefaultLayout from '@/modules/layout/components/DefaultLayout';
import OrganizationTable from '@/modules/organization_overview/components/OrganizationTable';
import { useOrganizationTable } from '@/modules/organization_overview/helpers/hooks';
import ApiHandler from '@/services/ApiHandler';
import { useStore } from '@/store';
import { default as React, useEffect } from 'react';

const App: React.FC = () => {
  const rows = useOrganizationTable();
  const { fetchOrganizations } = useStore(({ fetchOrganizations }) => ({ fetchOrganizations }));

  useEffect(() => {
    ApiHandler.init();
    fetchOrganizations();
  }, []);

  return (
    <DefaultLayout>
      <OrganizationTable rows={rows} />
    </DefaultLayout>
  );
};

export default App;
