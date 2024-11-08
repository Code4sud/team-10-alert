import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GetUserDto, LoginResponseDto } from "./user.model";

interface IAuthState {
  accessToken: string | null;
  user: GetUserDto | null;
}

interface IAuthAction {
  login: (by: LoginResponseDto) => void;
  logout: () => void;
}

export const useUserStore = create<IAuthAction & IAuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      user: null,
      login: (auth: LoginResponseDto) => set({ accessToken: auth.accessToken, user: auth.user }),
      logout: () => set({ accessToken: null, user: null }),
    }),
    {
      name: "accessToken",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
