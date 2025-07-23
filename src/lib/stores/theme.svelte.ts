import { themes, type ColorTheme, defaultTheme } from '$lib/themes';

class ThemeStore {
    current = $state<ColorTheme>(defaultTheme);
    
    set(theme: ColorTheme) {
        this.current = theme;
    }
    
    get theme() {
        return themes[this.current];
    }
}

export const themeStore = new ThemeStore();