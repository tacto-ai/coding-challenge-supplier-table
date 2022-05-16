import ApiHandler from '@/services/ApiHandler';
import { RootStore } from '@/store/types';
import { keyBy } from 'lodash';
import { GetState, SetState } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const fetchDepartments = async (set: SetState<RootStore>, get: GetState<RootStore>) => {
  set({ isLoadingDepartments: true });

  try {
    const departments = await ApiHandler.doCall(() => ApiHandler.DepartmentsAPI.fetchDepartments());
    set({
      departmentDict: {
        ...get().departmentDict,
        ...keyBy(departments, 'id'),
      },
    });
  } finally {
    set({ isLoadingDepartments: false });
  }
};
