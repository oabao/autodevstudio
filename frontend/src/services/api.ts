// frontend/src/services/api.ts
import user from '../data/user.json';
import projects from '../data/projects.json';
import requirements from '../data/requirements.json';
import techStacks from '../data/techStacks.json';
import architecture from '../data/architecture.json';
import development from '../data/development.json';
import billing from '../data/billing.json';

// Simulate a network delay
const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  getUser: async () => {
    await sleep(500);
    return user;
  },
  getProjects: async () => {
    await sleep(1000);
    return projects;
  },
  getRequirements: async (projectId: string) => {
    await sleep(1500);
    // In a real app, we'd filter by projectId
    return requirements;
  },
  getTechStacks: async (projectId: string) => {
    await sleep(1000);
    return techStacks;
  },
  getArchitecture: async (projectId: string) => {
    await sleep(1000);
    return architecture;
  },
  getDevelopmentStatus: async (projectId: string) => {
    await sleep(500);
    return development;
  },
  getBillingInfo: async () => {
    await sleep(1000);
    return billing;
  },
};
