import { create } from 'zustand';

interface ProjectState {
  projectId: string | null;
  setProjectId: (projectId: string) => void;
}

const useProjectStore = create<ProjectState>((set) => ({
  projectId: null,
  setProjectId: (projectId) => set({ projectId }),
}));

export default useProjectStore;
