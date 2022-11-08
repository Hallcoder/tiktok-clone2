import {createContext} from 'react';

export let ThemeModeContext = createContext({
    ThemeMode:'dark',
    setThemeMode:(newMode) => {}
});