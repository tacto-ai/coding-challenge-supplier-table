import { Organization } from '@/api';
import { useOrganizations } from '@/store/organizations/hooks';
import { useUsersGroupedByOrganizations } from '@/store/users/hooks';

export interface OrganizationTableRow extends Organization {
  numberOfUsers: number;
}

export const useOrganizationTable = (): Array<OrganizationTableRow> => {
  const organizations = useOrganizations();
  const userOrgDict = useUsersGroupedByOrganizations();
  return organizations.map((organization) => ({
    ...organization,
    numberOfUsers: userOrgDict[organization.id]?.length || 0,
  }));
};
