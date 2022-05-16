import { createArticleSlice } from '@/store/articles';
import { createDepartmentSlice } from '@/store/departments';
import { createOrganizationSlice } from '@/store/organizations';
import { RootStore } from '@/store/types';
import { createUserSlice } from '@/store/users';
import create from 'zustand';
import { StateCreator } from 'zustand/vanilla';

export const initialRootState: StateCreator<RootStore> = (set, get) => ({
  ...createOrganizationSlice(set, get),
  ...createUserSlice(set, get),
  ...createArticleSlice(set, get),
  ...createDepartmentSlice(set, get),
});

export const useStore = create<RootStore>(initialRootState);
