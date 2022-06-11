import create from 'zustand';
// import { Accent } from './ThemeConfig';


// export enum Colors {
//     company,
//     default,
//     yellow,
//     orange,
//     red,
//     pink,
//     purple,
//     darkBlue,
//     lightBlue,
//     teal,
//     green,
// }

// interface AccentType {
//     accent: string,
//     setAccent: (accent: string) => void
// }

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

export default create(set => ({
    theme: 'dark',
    setTheme: (theme: string) => set({ theme }),
}));