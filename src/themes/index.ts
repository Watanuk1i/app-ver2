import { ThemeType, ThemeNames } from '../types';

const cyberpunkTheme: ThemeType = {
  name: 'cyberpunk',
  colors: {
    primary: '#00F0FF',
    secondary: '#FF0099',
    background: '#0A0A0F',
    surface: '#1A1A24',
    text: '#FFFFFF',
    accent: '#FF0099',
    gradient: 'linear-gradient(45deg, #00f0ff 0%, #0066ff 100%)',
    success: '#00FF9D',
    error: '#FF3366',
    warning: '#FFB800',
    info: '#00F0FF',
    muted: '#666666'
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
    medium: '0 6px 12px rgba(0, 240, 255, 0.15)',
    strong: '0 12px 24px rgba(0, 240, 255, 0.2)'
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

const gamingTheme: ThemeType = {
  name: 'gaming',
  colors: {
    primary: '#FF3366',
    secondary: '#33FF99',
    background: '#141414',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    accent: '#9933FF',
    gradient: 'linear-gradient(135deg, #FF3366 0%, #9933FF 100%)',
    success: '#33FF99',
    error: '#FF3366',
    warning: '#FFB800',
    info: '#3399FF',
    muted: '#666666'
  },
  fonts: {
    primary: 'Play, sans-serif',
    secondary: 'Roboto, sans-serif'
  },
  borderRadius: '8px',
  shadows: {
    sharp: '0 2px 4px rgba(0, 0, 0, 0.2)',
    neon: '0 0 15px rgba(255, 51, 102, 0.5)',
    default: '0 4px 8px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 16px rgba(255, 51, 102, 0.3)',
    subtle: '0 2px 4px rgba(255, 51, 102, 0.1)',
    medium: '0 6px 12px rgba(255, 51, 102, 0.15)',
    strong: '0 12px 24px rgba(255, 51, 102, 0.2)'
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

const esportsTheme: ThemeType = {
  name: 'esports',
  colors: {
    primary: '#FF4B4B',
    secondary: '#1E2024',
    background: '#141517',
    surface: '#2A2D35',
    text: '#E9ECEF',
    accent: '#FFC107',
    gradient: 'linear-gradient(135deg, #FF4B4B 0%, #FFC107 100%)',
    success: '#FFC107',
    error: '#FF4B4B',
    warning: '#FFB800',
    info: '#3399FF',
    muted: '#666666'
  },
  fonts: {
    primary: 'Russo One, sans-serif',
    secondary: 'Inter, sans-serif'
  },
  borderRadius: '4px',
  shadows: {
    sharp: '0 2px 4px rgba(0, 0, 0, 0.2)',
    neon: 'none',
    default: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hover: '0 6px 12px rgba(255, 75, 75, 0.3)',
    subtle: '0 2px 4px rgba(255, 75, 75, 0.1)',
    medium: '0 6px 12px rgba(255, 75, 75, 0.15)',
    strong: '0 12px 24px rgba(255, 75, 75, 0.2)'
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

const luxuryTheme: ThemeType = {
  name: 'luxury',
  colors: {
    primary: '#C9B037',
    secondary: '#D4AF37',
    background: '#0C0C0C',
    surface: '#1C1C1C',
    text: '#FFFFFF',
    accent: '#FFD700',
    gradient: 'linear-gradient(135deg, #C9B037 0%, #FFD700 100%)',
    success: '#FFD700',
    error: '#FFC9B0',
    warning: '#FFB800',
    info: '#FFD4AF',
    muted: '#404040'
  },
  fonts: {
    primary: 'Montserrat, sans-serif',
    secondary: 'Playfair Display, serif'
  },
  borderRadius: '6px',
  shadows: {
    sharp: '0 2px 4px rgba(201, 176, 55, 0.2)',
    neon: '0 0 20px rgba(201, 176, 55, 0.4)',
    default: '0 4px 8px rgba(0, 0, 0, 0.15)',
    hover: '0 8px 16px rgba(201, 176, 55, 0.2)',
    subtle: '0 2px 4px rgba(201, 176, 55, 0.1)',
    medium: '0 6px 12px rgba(201, 176, 55, 0.15)',
    strong: '0 12px 24px rgba(201, 176, 55, 0.2)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.4s ease-out',
    fast: '0.2s ease-out',
    slow: '0.6s ease-out'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

const futuristicTheme: ThemeType = {
  name: 'futuristic',
  colors: {
    primary: '#4F46E5',
    secondary: '#818CF8',
    background: '#030712',
    surface: '#111827',
    text: '#F9FAFB',
    accent: '#60A5FA',
    gradient: 'linear-gradient(135deg, #4F46E5 0%, #60A5FA 100%)',
    success: '#60A5FA',
    error: '#FF4F4F',
    warning: '#FFB800',
    info: '#3399FF',
    muted: '#666666'
  },
  fonts: {
    primary: 'Space Grotesk, sans-serif',
    secondary: 'Inter, sans-serif'
  },
  borderRadius: '16px',
  shadows: {
    sharp: '0 2px 4px rgba(79, 70, 229, 0.2)',
    neon: '0 0 25px rgba(79, 70, 229, 0.4)',
    default: '0 4px 12px rgba(0, 0, 0, 0.1)',
    hover: '0 8px 20px rgba(79, 70, 229, 0.3)',
    subtle: '0 2px 6px rgba(79, 70, 229, 0.1)',
    medium: '0 6px 16px rgba(79, 70, 229, 0.2)',
    strong: '0 12px 28px rgba(79, 70, 229, 0.3)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.45s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

const proGamingTheme: ThemeType = {
  name: 'proGaming',
  colors: {
    primary: '#FF3366',
    secondary: '#1E2024',
    background: '#141517',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    accent: '#FFC107',
    gradient: 'linear-gradient(135deg, #FF3366 0%, #FFC107 100%)',
    success: '#33FF99',
    error: '#FF4B4B',
    warning: '#FFB800',
    info: '#3399FF',
    muted: '#404040'
  },
  fonts: {
    primary: 'Play, Russo One, sans-serif',
    secondary: 'Inter, sans-serif'
  },
  borderRadius: '6px',
  shadows: {
    sharp: '0 2px 4px rgba(255, 51, 102, 0.25)',
    neon: '0 0 20px rgba(255, 51, 102, 0.5)',
    default: '0 4px 8px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 16px rgba(255, 51, 102, 0.3)',
    subtle: '0 2px 4px rgba(255, 51, 102, 0.1)',
    medium: '0 6px 12px rgba(255, 51, 102, 0.15)',
    strong: '0 12px 24px rgba(255, 51, 102, 0.2)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.45s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

const ultraGamingTheme: ThemeType = {
  name: 'ultraGaming',
  colors: {
    primary: '#FF3366',
    secondary: '#1E2024',
    background: '#141517',
    surface: '#1E1E1E',
    text: '#FFFFFF',
    accent: '#FFC107',
    gradient: 'linear-gradient(135deg, #FF3366 0%, #FFC107 100%)',
    success: '#33FF99',
    error: '#FF4B4B',
    warning: '#FFB800',
    info: '#3399FF',
    muted: '#404040'
  },
  fonts: {
    primary: 'Play, Russo One, sans-serif',
    secondary: 'Inter, sans-serif'
  },
  borderRadius: '6px',
  shadows: {
    sharp: '0 2px 4px rgba(255, 51, 102, 0.2)',
    neon: '0 0 20px rgba(255, 51, 102, 0.5)',
    default: '0 4px 8px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 16px rgba(255, 51, 102, 0.3)',
    subtle: '0 2px 4px rgba(255, 51, 102, 0.1)',
    medium: '0 6px 12px rgba(255, 51, 102, 0.2)',
    strong: '0 12px 24px rgba(255, 51, 102, 0.3)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.45s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

// Новая тема: UltraGamingPro (смесь Ultra Gaming и Gaming Pro)
const ultraGamingProTheme: ThemeType = {
  name: 'ultraGamingPro',
  colors: {
    primary: '#FF3366',      // Из Gaming Pro
    secondary: '#33FF99',    // Из Gaming Pro
    background: '#141517',   // Из Ultra Gaming
    surface: '#1E1E1E',     // Из Ultra Gaming
    text: '#FFFFFF',
    accent: '#9933FF',      // Из Gaming Pro
    gradient: 'linear-gradient(135deg, #FF3366 0%, #33FF99 100%)', // Новый градиент
    success: '#33FF99',
    error: '#FF3366',
    warning: '#FFB800',
    info: '#3399FF',
    muted: '#404040'
  },
  fonts: {
    primary: 'Play, sans-serif',    // Из Gaming Pro
    secondary: 'Roboto, sans-serif' // Из Gaming Pro
  },
  borderRadius: '8px',
  shadows: {
    sharp: '0 2px 4px rgba(255, 51, 102, 0.25)',
    neon: '0 0 20px rgba(255, 51, 102, 0.6)',
    default: '0 4px 8px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 16px rgba(255, 51, 102, 0.4)',
    subtle: '0 2px 4px rgba(255, 51, 102, 0.1)',
    medium: '0 6px 12px rgba(255, 51, 102, 0.3)',
    strong: '0 12px 24px rgba(255, 51, 102, 0.4)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.45s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

// Новая тема: CyberGamingPro (смесь Cyberpunk и Gaming Pro)
const cyberGamingProTheme: ThemeType = {
  name: 'cyberGamingPro',
  colors: {
    primary: '#00F0FF',      // Из Cyberpunk
    secondary: '#FF3366',    // Из Gaming Pro
    background: '#0A0A0B',   // Из Cyberpunk
    surface: '#1E1E1E',     // Из Gaming Pro
    text: '#FFFFFF',
    accent: '#9933FF',      // Из Gaming Pro
    gradient: 'linear-gradient(135deg, #00F0FF 0%, #FF3366 100%)', // Новый градиент
    success: '#33FF99',     // Из Gaming Pro
    error: '#FF0055',       // Из Cyberpunk
    warning: '#FFB800',
    info: '#00B8FF',       // Из Cyberpunk
    muted: '#404040'
  },
  fonts: {
    primary: 'Rajdhani, Play, sans-serif', // Комбинация обоих
    secondary: 'Inter, sans-serif'
  },
  borderRadius: '10px',    // Среднее между обоими
  shadows: {
    sharp: '0 2px 4px rgba(0, 240, 255, 0.25)',
    neon: '0 0 25px rgba(0, 240, 255, 0.6)',
    default: '0 4px 8px rgba(0, 0, 0, 0.2)',
    hover: '0 8px 16px rgba(0, 240, 255, 0.4)',
    subtle: '0 2px 4px rgba(0, 240, 255, 0.1)',
    medium: '0 6px 12px rgba(0, 240, 255, 0.3)',
    strong: '0 12px 24px rgba(0, 240, 255, 0.4)'
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px'
  },
  transitions: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.45s cubic-bezier(0.4, 0, 0.2, 1)'
  },
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px'
  }
};

const minimalistTheme: ThemeType = {
  name: 'minimalist',
  colors: {
    primary: '#FFFFFF',
    secondary: '#000000',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#000000',
    accent: '#000000',
    gradient: 'linear-gradient(135deg, #FFFFFF 0%, #000000 100%)',
    success: '#00FF00',
    error: '#FF0000',
    warning: '#FFFF00',
    info: '#0000FF',
    muted: '#808080'
  },
  fonts: {
    primary: 'Arial, sans-serif',
    secondary: 'Arial, sans-serif'
  },
  borderRadius: '0px',
  shadows: {
    sharp: '0 0 0 rgba(0, 0, 0, 0)',
    neon: '0 0 0 rgba(0, 0, 0, 0)',
    default: '0 0 0 rgba(0, 0, 0, 0)',
    hover: '0 0 0 rgba(0, 0, 0, 0)',
    subtle: '0 0 0 rgba(0, 0, 0, 0)',
    medium: '0 0 0 rgba(0, 0, 0, 0)',
    strong: '0 0 0 rgba(0, 0, 0, 0)'
  },
  spacing: {
    xs: '0px',
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px'
  },
  transitions: {
    default: '0s ease-in-out',
    fast: '0s ease-in-out',
    slow: '0s ease-in-out'
  },
  containers: {
    sm: '0px',
    md: '0px',
    lg: '0px',
    xl: '0px'
  }
};

export const themes: Record<ThemeNames, ThemeType> = {
  cyberpunk: cyberpunkTheme,
  gaming: gamingTheme,
  esports: esportsTheme,
  luxury: luxuryTheme,
  futuristic: futuristicTheme,
  ultraGaming: ultraGamingTheme,
  ultraGamingPro: ultraGamingProTheme,
  cyberGamingPro: cyberGamingProTheme,
  proGaming: proGamingTheme,
  minimalist: minimalistTheme
};

export {
  cyberpunkTheme,
  gamingTheme,
  esportsTheme,
  luxuryTheme,
  futuristicTheme,
  ultraGamingTheme,
  ultraGamingProTheme,
  cyberGamingProTheme,
  proGamingTheme,
  minimalistTheme
}; 