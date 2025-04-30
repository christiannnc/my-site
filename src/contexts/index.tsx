import { createContext, Dispatch, SetStateAction } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);
