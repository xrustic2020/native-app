import React, {createContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import type {ColorSchemeName} from 'react-native';

export const THEME = {
  light: 'light',
  dark: 'dark',
} as const;

interface IProps {
  children: JSX.Element;
}

interface IDefaultStore {
  theme: ColorSchemeName;
  isDarkTheme: boolean;
  autoSetTheme: boolean;
  changeThemeToDark: () => void;
  changeThemeToLight: () => void;
  toggleAutoSetTheme: () => void;
}

const defaultStore: IDefaultStore = {
  theme: THEME.light,
  isDarkTheme: false,
  autoSetTheme: false,
  changeThemeToDark: () => {},
  changeThemeToLight: () => {},
  toggleAutoSetTheme: () => {},
};

export const themeContext = createContext(defaultStore);

export default function ThemeProvider({children}: IProps) {
  const [theme, setTheme] = useState<ColorSchemeName>(defaultStore.theme);
  const [autoSetTheme, setAutoSetTheme] = useState(defaultStore.autoSetTheme);

  const colorScheme = useColorScheme();
  const isDarkTheme = theme === THEME.dark;

  console.log('theme: ', theme);
  console.log('autoSetTheme: ', autoSetTheme);

  const changeThemeToDark = () => {
    setTheme(THEME.dark);
  };

  const changeThemeToLight = () => {
    setTheme(THEME.light);
  };

  const toggleAutoSetTheme = () => {
    setAutoSetTheme(!autoSetTheme);
  };

  useEffect(() => {
    console.log(colorScheme);
    if (autoSetTheme) {
      setTheme(colorScheme);
    }
  }, [autoSetTheme, colorScheme]);

  return (
    <themeContext.Provider
      value={{
        theme,
        isDarkTheme,
        autoSetTheme,
        changeThemeToDark,
        changeThemeToLight,
        toggleAutoSetTheme,
      }}>
      {children}
    </themeContext.Provider>
  );
}
