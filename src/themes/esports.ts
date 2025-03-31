import { ThemeType } from '../types';

export const esportsTheme: ThemeType = {
  name: 'esports',
  colors: {
    primary: '#FF4B4B',     // Красный
    secondary: '#1E2024',   // Темно-серый
    background: '#141517',  // Почти черный
    surface: '#1E1E1E',     // Серый
    text: '#FFFFFF',        // Светло-серый
    accent: '#FFB800',       // Желтый
    gradient: 'linear-gradient(135deg, #FF4B4B 0%, #FFB800 100%)',
    success: '#4CAF50',
    error: '#FF4B4B',
    warning: '#FFB800',
    info: '#2196F3',
    muted: '#6C7080'
  },
  fonts: {
    primary: 'Inter, sans-serif',
    secondary: 'Roboto, sans-serif'
  },
  borderRadius: '4px',
  shadows: {
    sharp: '0 2px 4px rgba(0, 0, 0, 0.2)',
    neon: 'none',
    default: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hover: '0 6px 12px rgba(255, 75, 75, 0.3)',
    subtle: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.2)',
    strong: '0 8px 16px rgba(0, 0, 0, 0.3)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.15s ease',
    slow: '0.45s ease'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}; 