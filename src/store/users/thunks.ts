import ApiHandler from '@/services/ApiHandler';
import { RootStore } from '@/store/types';
import { keyBy } from 'lodash';
import { GetState, SetState } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const fetchUsers = async (set: SetState<RootStore>, get: GetState<RootStore>) => {
  set({ isLoadingUsers: true });

  try {
    const users = await ApiHandler.doCall(() => ApiHandler.UsersAPI.fetchUsers());
    set({
      userDict: {
        ...get().userDict,
        ...keyBy(users, 'id'),
      },
    });
  } finally {
    set({ isLoadingUsers: false });
  }
};
