import React, {createContext, useState, useEffect, useContext} from 'react';
import {useColorScheme} from 'react-native';
import type {ColorSchemeName} from 'react-native';
import appContext from './AppContext';

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
  const {setStorageData, getStorageData} = useContext(appContext);

  const colorScheme = useColorScheme();
  const isDarkTheme = theme === THEME.dark;

  // console.log('theme: ', theme);
  // console.log('autoSetTheme: ', autoSetTheme);

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

  // useEffect(() => {
  //   getStorageData('theme').then(data => {
  //     if (!data) {
  //       console.log('No theme value in storage');
  //       return;
  //     }
  //     const result = JSON.parse(data);
  //     console.log('theme in storage', result);
  //     return result;
  //   });
  //   // console.log('themeInStorage', themeInStorage);

  //   // return () => {
  //   //   second;
  //   // };
  // }, []);

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
