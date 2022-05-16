import { fetchOrganizations } from '@/store/organizations/thunks';
import { OrganizationState } from '@/store/organizations/types';
import { CustomStoreSlice } from '@/store/types';

// eslint-disable-next-line import/prefer-default-export
export const createOrganizationSlice: CustomStoreSlice<OrganizationState> = (set, get) => ({
  organizationDict: {},

  isLoadingOrganizations: false,

  fetchOrganizations: () => fetchOrganizations(set, get),
});
