import { User } from '@/api';

export interface UserState {
  userDict: Record<number, User>;

  isLoadingUsers: boolean;

  fetchUsers: () => Promise<void>;
}
