import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { GetUserDto } from './user.model';

interface IAuthState {
  accessToken: string | null;
  user: GetUserDto | null;
}

interface IAuthAction {
  login: (accessToken: string, user: GetUserDto) => void;
  logout: () => void;
}

export const useUserStore = create<IAuthAction & IAuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      login: (accessToken: string, user: GetUserDto) => set({ accessToken: accessToken, user: user }),
      logout: () => set({ accessToken: null, user: null }),
    }),
    {
      name: 'accessToken',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
