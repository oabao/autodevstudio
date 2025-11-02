import { create } from 'zustand';

interface UserState {
  user: { name: string } | null;
  jwt: string | null;
  isAuthenticated: boolean;
  login: (user: { name: string }, jwt: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  jwt: null,
  isAuthenticated: false,
  login: (user, jwt) => set({ user, jwt, isAuthenticated: true }),
  logout: () => set({ user: null, jwt: null, isAuthenticated: false }),
}));

export default useUserStore;
