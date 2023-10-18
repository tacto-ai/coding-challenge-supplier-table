import DefaultLayout from '@/modules/layout/components/DefaultLayout';
import OrganizationTable from '@/modules/organization_overview/components/OrganizationTable';
import { useOrganizationTable } from '@/modules/organization_overview/helpers/hooks';
import ApiHandler from '@/services/ApiHandler';
import { useStore } from '@/store';
import { default as React, useEffect } from 'react';

const App: React.FC = () => {
  const rows = useOrganizationTable();
  const { fetchOrganizations, fetchUsers, fetchDepartments, fetchArticles } = useStore(
    ({ fetchOrganizations, fetchUsers, fetchDepartments, fetchArticles }) => ({ fetchOrganizations, fetchUsers, fetchDepartments, fetchArticles })
  );

  useEffect(() => {
    ApiHandler.init();
    fetchOrganizations();
    fetchUsers();
    fetchDepartments();
    fetchArticles();
  }, []);

  return (
    <DefaultLayout>
      <OrganizationTable rows={rows} />
    </DefaultLayout>
  );
};

export default App;
