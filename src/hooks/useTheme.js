import { useContext } from 'react';
import { ThemeContext } from 'src/contexts/ThemeContext.jsx';

export const useTheme = () => useContext(ThemeContext);
