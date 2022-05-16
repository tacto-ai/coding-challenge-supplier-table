import { Department } from '@/api';

export interface DepartmentState {
  departmentDict: Record<number, Department>;

  isLoadingDepartments: boolean;

  fetchDepartments: () => Promise<void>;
}
