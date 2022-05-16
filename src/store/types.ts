import { ArticleState } from '@/store/articles/types';
import { DepartmentState } from '@/store/departments/types';
import { OrganizationState } from '@/store/organizations/types';
import { UserState } from '@/store/users/types';
import { GetState, SetState } from 'zustand';

export type RootStore = OrganizationState & UserState & ArticleState & DepartmentState;

export type CustomStoreSlice<SubState> = (set: SetState<RootStore>, get: GetState<RootStore>) => SubState;
