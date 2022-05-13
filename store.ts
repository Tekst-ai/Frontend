import create from 'zustand';

export default create(set => ({
  theme: 'dark',
  setTheme: (theme: any) => set({ theme }),
}));