import { create } from 'zustand';

interface UserState {
  user: { name: string } | null;
  isAuthenticated: boolean;
  login: (user: { name: string }) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
}));

export default useUserStore;
