import { create } from 'zustand';

interface UserState {
  isAuthenticated: boolean;
  user: { name: string } | null;
  login: (username: string) => void;
  logout: () => void;
}

const useUserStore = create<UserState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username) => set({ isAuthenticated: true, user: { name: username } }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useUserStore;
