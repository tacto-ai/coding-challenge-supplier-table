import { Organization, User, Article } from '@/api';
import { findContactPerson, findInRiskArticles, findSupplierArticles } from '@/modules/organization_overview/helpers/utils';
import { useStore } from '@/store';
import { useGetDepartmentByName } from '@/store/departments/hooks';
import { useOrganizations } from '@/store/organizations/hooks';
import { useUsersGroupedByOrganizations } from '@/store/users/hooks';
import { useMemo } from 'react';

export interface OrganizationTableRow extends Organization {
  numberOfUsers: number;
  contactPerson?: User;
  articleCount: number;
  inRiskArticles: Article[];
}

export const useOrganizationTable = (): Array<OrganizationTableRow> => {
  const { articleDict } = useStore(({ articleDict }) => ({ articleDict }));

  const organizations = useOrganizations();
  const userOrgDict = useUsersGroupedByOrganizations();
  const contactDepartment = useGetDepartmentByName('Management');

  return useMemo(
    () =>
      organizations.map((organization) => {
        const supplierArticles = findSupplierArticles(Object.values(articleDict), organization.id);

        return {
          ...organization,
          numberOfUsers: userOrgDict[organization.id]?.length || 0,
          contactPerson: contactDepartment && findContactPerson(userOrgDict[organization.id] || [], contactDepartment),
          articleCount: supplierArticles.length,
          inRiskArticles: findInRiskArticles(supplierArticles),
        };
      }),
    [articleDict, organizations, userOrgDict, contactDepartment]
  );
};
