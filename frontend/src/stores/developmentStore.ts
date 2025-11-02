import { create } from 'zustand';
import { getProjectStatus, getTestCases, getDevelopedCode, getRefactoredCode } from '../services/api/projectService';

interface DevelopmentState {
  progress: any;
  testCases: string | null;
  developedCode: string | null;
  refactoredCode: string | null;
  error: string | null;
  isLoading: boolean;
  actions: {
    fetchDevelopmentStatus: (projectId: string) => Promise<void>;
  };
}

const useDevelopmentStore = create<DevelopmentState>((set) => ({
  progress: null,
  testCases: null,
  developedCode: null,
  refactoredCode: null,
  error: null,
  isLoading: true,
  actions: {
    fetchDevelopmentStatus: async (projectId) => {
      set({ isLoading: true, error: null });
      try {
        const statusRes = await getProjectStatus(projectId);
        const testCasesRes = await getTestCases(projectId);
        const developedCodeRes = await getDevelopedCode(projectId);
        const refactoredCodeRes = await getRefactoredCode(projectId);

        set({
          progress: statusRes,
          testCases: testCasesRes.result,
          developedCode: developedCodeRes.result,
          refactoredCode: refactoredCodeRes.result,
          isLoading: false,
        });
      } catch (error) {
        set({ error: 'Failed to fetch development status', isLoading: false });
      }
    },
  },
}));

export default useDevelopmentStore;
