import { Organization } from '@/api';
import { useStore } from '@/store';
import { orderBy } from 'lodash';
import { useMemo } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useOrganizations = (): Array<Organization> => {
  const { organizationDict } = useStore(({ organizationDict }) => ({ organizationDict }));
  return useMemo(() => {
    const organizations = Object.values(organizationDict);
    return orderBy(organizations, ['name'], ['asc']);
  }, [organizationDict]);
};
