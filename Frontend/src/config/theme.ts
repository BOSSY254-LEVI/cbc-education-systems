import { ThemeColors } from '@/types/dashboard';

// IMPROVED COLOR SCHEMES - Better Contrast
export const lightTheme: ThemeColors = {
  sidebar: {
    bg: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
    hoverBg: 'hover:bg-gray-100',
    activeBg: 'bg-gray-100',
    logoSection: 'border-gray-200 bg-white',
  },
  header: {
    bg: 'bg-white',
    border: 'border-gray-200',
    text: 'text-gray-900',
    buttonHover: 'hover:bg-gray-100',
  },
  main: {
    bg: 'bg-white',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
  },
  card: {
    bg: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-900',
    textSecondary: 'text-gray-600',
  },
  badge: 'bg-red-600',
};

export const darkTheme: ThemeColors = {
  sidebar: {
    bg: 'bg-gray-900',
    border: 'border-gray-800',
    text: 'text-white',
    textSecondary: 'text-gray-300',
    hoverBg: 'hover:bg-gray-800',
    activeBg: 'bg-gray-800',
    logoSection: 'border-gray-800 bg-gray-950',
  },
  header: {
    bg: 'bg-gray-900',
    border: 'border-gray-800',
    text: 'text-white',
    buttonHover: 'hover:bg-gray-800',
  },
  main: {
    bg: 'bg-gray-950',
    text: 'text-white',  // BRIGHT WHITE - Much more visible
    textSecondary: 'text-gray-300',  // Lighter gray for secondary text
  },
  card: {
    bg: 'bg-gray-800',  // Lighter card background
    border: 'border-gray-700',
    text: 'text-white',
    textSecondary: 'text-gray-300',
  },
  badge: 'bg-red-600',
};

export const getTheme = (isDarkMode: boolean): ThemeColors => {
  return isDarkMode ? darkTheme : lightTheme;
};
