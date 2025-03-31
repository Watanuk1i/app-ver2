import { cyberpunkTheme } from './themes/cyberpunk';

export type ThemeNames = 
  | 'cyberpunk'
  | 'gaming'
  | 'esports'
  | 'luxury'
  | 'futuristic'
  | 'ultraGaming'
  | 'ultraGamingPro'
  | 'cyberGamingPro'
  | 'proGaming'
  | 'minimalist';

export interface ThemeType {
  name: ThemeNames;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    accent: string;
    gradient: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    muted: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  borderRadius: string;
  shadows: {
    sharp: string;
    neon: string;
    default: string;
    hover: string;
    subtle: string;
    medium: string;
    strong: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    default: string;
    fast: string;
    slow: string;
  };
  containers: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
} 