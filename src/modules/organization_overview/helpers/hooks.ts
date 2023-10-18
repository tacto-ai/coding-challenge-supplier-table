import { Organization, User, Article } from '@/api';
import { useStore } from '@/store';
import { useGetDepartmentByName } from '@/store/departments/hooks';
import { useOrganizations } from '@/store/organizations/hooks';
import { useUsersGroupedByOrganizations } from '@/store/users/hooks';

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

  return organizations.map((organization) => ({
    ...organization,
    numberOfUsers: userOrgDict[organization.id]?.length || 0,
    contactPerson: (userOrgDict[organization.id] || []).find((user) => contactDepartment && user.departmentIds.includes(contactDepartment.id)),
    articleCount: Object.values(articleDict).filter((article) => article.suppliedBy.includes(organization.id)).length,
    inRiskArticles: Object.values(articleDict).filter((article) => article.suppliedBy.length === 1 && article.suppliedBy[0] === organization.id),
  }));
};
