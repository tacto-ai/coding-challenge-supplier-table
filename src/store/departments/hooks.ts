import { Department } from '@/api';
import { useStore } from '@/store';
import { useMemo } from 'react';

// eslint-disable-next-line import/prefer-default-export
export const useGetDepartmentByName = (departmentName: string): Department | undefined => {
  const { departmentDict } = useStore(({ departmentDict }) => ({ departmentDict }));

  return useMemo(() => Object.values(departmentDict).find((department) => department.name === departmentName), [departmentDict]);
};
