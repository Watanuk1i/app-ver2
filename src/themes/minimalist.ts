import { ThemeType } from '../types';

/**
 * Минималистичная тема с акцентом на чистоту и современный дизайн
 */
export const minimalistTheme: ThemeType = {
  name: 'minimalist',
  colors: {
    // Основные цвета
    primary:    '#7B61FF',  // Основной фиолетовый
    secondary:  '#2D3436',  // Графитовый серый
    background: '#FFFFFF',  // Чистый белый фон
    surface:    '#F8F9FA',  // Светло-серая поверхность
    text:       '#2D3436',  // Основной текст
    accent:     '#7B61FF',  // Акцентный фиолетовый
    
    // Градиенты
    gradient:   'linear-gradient(135deg, #7B61FF 0%, #9B8AFF 100%)',
    success:    '#00C853',
    error:      '#FF5252',
    warning:    '#FFB300',
    info:       '#2196F3',
    muted:      '#757575'
  },

  // Типографика
  fonts: {
    primary:   'Inter, -apple-system, system-ui, sans-serif',
    secondary: 'Roboto, Arial, sans-serif',
  },

  // Скругления углов
  borderRadius: '8px',

  // Тени и эффекты
  shadows: {
    sharp: '0 2px 4px rgba(0, 0, 0, 0.1)',
    default: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hover: '0 8px 15px rgba(123, 97, 255, 0.2)',
    neon: 'none',
    subtle: '0 1px 3px rgba(0, 0, 0, 0.05)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    strong: '0 6px 12px rgba(0, 0, 0, 0.15)'
  },

  // Дополнительные параметры для улучшения визуального восприятия
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },

  // Анимации
  transitions: {
    default: '0.2s ease-in-out',
    fast:    '0.1s ease-in-out',
    slow:    '0.3s ease-in-out',
  },

  // Размеры контейнеров
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

// Экспорт констант для повторного использования
export const MINIMALIST_COLORS = minimalistTheme.colors;
export const MINIMALIST_SHADOWS = minimalistTheme.shadows;
export const MINIMALIST_SPACING = minimalistTheme.spacing; 