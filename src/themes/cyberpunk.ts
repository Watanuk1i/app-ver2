import { ThemeType } from '../types';

export const cyberpunkTheme: ThemeType = {
  name: 'cyberpunk',
  colors: {
    primary: '#00F0FF',     // Неоновый голубой
    secondary: '#FF0099',   // Неоновый розовый
    background: '#0A0A0B',  // Глубокий черный
    surface: '#1A1A1B',     // Темно-серый
    text: '#FFFFFF',        // Белый
    accent: '#FFD700',       // Золотой
    gradient: 'linear-gradient(135deg, #00F0FF 0%, #FF0099 100%)',
    // Дополнительные цвета для новых компонентов
    success: '#00FF9F',
    error: '#FF0055',
    warning: '#FFB800',
    info: '#00B8FF',
    muted: '#404040'
  },
  fonts: {
    primary: 'Rajdhani, sans-serif',
    secondary: 'Inter, sans-serif'
  },
  borderRadius: '12px',
  shadows: {
    sharp: '0 2px 4px rgba(0, 240, 255, 0.3)',
    neon: '0 0 20px rgba(0, 240, 255, 0.5)',
    default: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hover: '0 0 30px rgba(0, 240, 255, 0.8)',
    subtle: '0 2px 4px rgba(0, 240, 255, 0.1)',
    medium: '0 4px 8px rgba(0, 240, 255, 0.2)',
    strong: '0 8px 16px rgba(0, 240, 255, 0.3)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.45s ease-in-out'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
}; 