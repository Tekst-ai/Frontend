import create from 'zustand';

export const useAccent = create(set => ({
  accent: 'default',
  setAccent: (accent: any) => set({ accent }),
}));

export default create(set => ({
  theme: 'dark',
  setTheme: (theme: any) => set({ theme }),
}));