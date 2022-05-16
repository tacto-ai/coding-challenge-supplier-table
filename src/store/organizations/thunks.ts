import ApiHandler from '@/services/ApiHandler';
import { RootStore } from '@/store/types';
import { keyBy } from 'lodash';
import { GetState, SetState } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const fetchOrganizations = async (set: SetState<RootStore>, get: GetState<RootStore>) => {
  set({ isLoadingOrganizations: true });

  try {
    const organizations = await ApiHandler.doCall(() => ApiHandler.OrganizationsAPI.fetchOrganizations());
    set({
      organizationDict: {
        ...get().organizationDict,
        ...keyBy(organizations, 'id'),
      },
    });
  } finally {
    set({ isLoadingOrganizations: false });
  }
};
