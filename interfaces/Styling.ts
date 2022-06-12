import { Theme } from "../ThemeConfig";

export interface ThemeStylingProps {
    theme: keyof Theme
}

export interface AccentStylingProps {
    accent: string
}

export interface ThemeAccentStylingProps {
    theme: keyof Theme,
    accent: string
}