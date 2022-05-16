import { fetchDepartments } from '@/store/departments/thunks';
import { DepartmentState } from '@/store/departments/types';
import { CustomStoreSlice } from '@/store/types';

// eslint-disable-next-line import/prefer-default-export
export const createDepartmentSlice: CustomStoreSlice<DepartmentState> = (set, get) => ({
  departmentDict: {},

  isLoadingDepartments: false,

  fetchDepartments: () => fetchDepartments(set, get),
});
