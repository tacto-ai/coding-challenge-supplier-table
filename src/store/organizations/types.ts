import { Organization } from '@/api';

export interface OrganizationState {
  organizationDict: Record<number, Organization>;

  isLoadingOrganizations: boolean;

  fetchOrganizations: () => Promise<void>;
}
