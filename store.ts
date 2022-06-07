import create from 'zustand';

export const useAccent = create(set => ({
    accent: 'default',
    setAccent: (accent: string) => set({ accent }),
}));

export const useMenu = create(set => ({
    menu: true,
    setMenu: (menu: boolean) => set({ menu }),
}));

export const useAuth = create(set => ({
    auth: "false",
    setAuth: (auth: boolean) => set({ auth }),
}))

export const useWidth = create(set => ({
    width: 0,
    setWidth: (width: number) => set({ width }),
}))

export default create(set => ({
    theme: 'dark',
    setTheme: (theme: string) => set({ theme }),
}));