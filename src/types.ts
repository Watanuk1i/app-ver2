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
  | 'minimalist'
  | 'hybrid';

export interface ThemeType {
  name: ThemeNames;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
    gradient: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  borderRadius: string;
  transitions: {
    default: string;
  };
  shadows: {
    card: string;
    button: string;
    neon: string;
  };
} 