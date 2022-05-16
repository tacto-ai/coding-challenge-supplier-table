import { CustomStoreSlice } from '@/store/types';
import { fetchUsers } from '@/store/users/thunks';
import { UserState } from '@/store/users/types';

// eslint-disable-next-line import/prefer-default-export
export const createUserSlice: CustomStoreSlice<UserState> = (set, get) => ({
  userDict: {},

  isLoadingUsers: false,

  fetchUsers: () => fetchUsers(set, get),
});
