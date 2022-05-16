import { User } from '@/api';
import { useStore } from '@/store';
import { groupBy } from 'lodash';
import { useMemo } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useUsersGroupedByOrganizations = (): Record<number, User[] | undefined> => {
  const { userDict } = useStore(({ userDict }) => ({ userDict }));
  return useMemo(() => {
    const users = Object.values(userDict);
    return groupBy(users, 'organizationId');
  }, [userDict]);
};
