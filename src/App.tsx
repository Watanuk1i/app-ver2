import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './components/common/Header';
import Navigation from './components/common/Navigation';
import { ThemeType, ThemeNames } from './types';
import {
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
} from './themes';
import * as Icons from 'react-icons/fa';
import keyboardImage from './assets/bk1-0.png';
import avatarImage from './assets/ph-21.jpg';
import { tg } from './telegram';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.primary};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  /* Улучшаем отображение на iOS */
  input, button {
    -webkit-appearance: none;
    border-radius: 0;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  @media (min-width: 769px) {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
`;

const ThemeSelector = styled.div`
  display: flex;
  padding: 10px;
  overflow-x: auto;
  gap: 8px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  background: ${({ theme }) => theme.colors.surface};
  margin: 10px -10px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 769px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
    padding: 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
  }
`;

const ThemeButton = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.gradient : theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  letter-spacing: 0.5px;

  ${({ theme, $isActive }) => {
    switch (theme.name) {
      case 'cyberpunk':
        return `
          border: 1px solid ${$isActive ? theme.colors.primary : 'transparent'};
          box-shadow: ${$isActive ? `0 0 15px ${theme.colors.primary}50` : 'none'};
        `;
      case 'gaming':
        return `
          background: ${$isActive ? theme.colors.gradient : 'rgba(255,255,255,0.1)'};
          transform: skew(-5deg);
        `;
      case 'esports':
        return `
          border: 2px solid ${$isActive ? theme.colors.primary : 'transparent'};
          font-weight: bold;
        `;
      default:
        return '';
    }
  }}

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.card};
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
    white-space: nowrap;
    flex-shrink: 0;
  }
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  margin: 30px 0;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 22px;
    margin: 20px 0;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 10px 0;

  @media (min-width: 769px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    padding: 30px 0;
  }
`;

const Card = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 769px) {
    padding: 25px;
    min-height: 320px;
  }

  ${({ theme }) => theme.name === 'hybrid' && `
    background: ${theme.colors.surface};
    border: 1px solid ${theme.colors.primary}40;
    box-shadow: 0 0 20px ${theme.colors.primary}20;
    
    &:hover {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 30px ${theme.colors.primary}40;
      transform: translateY(-2px);
    }
    
    h3 {
      font-family: ${theme.fonts.primary};
      font-weight: 600;
      letter-spacing: 0.5px;
      color: ${theme.colors.text};
      text-shadow: 0 0 10px ${theme.colors.primary}40;
    }
  `}
`;

const ProfileCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PlayerCard = styled(Card)`
  position: relative;
  overflow: hidden;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.3;
  }

  ${({ theme }) => {
    switch (theme.name) {
      case 'cyberpunk':
        return `
          border: 2px solid ${theme.colors.primary};
          box-shadow: 0 0 20px ${theme.colors.primary}40;
        `;
      case 'gaming':
        return `
          background: linear-gradient(145deg, ${theme.colors.surface}, ${theme.colors.surface}ee);
        `;
      default:
        return '';
    }
  }}
`;

const AvatarWrapper = styled.div`
  position: relative;
  margin-top: 20px;
  z-index: 1;
`;

const Avatar = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  box-shadow: 0 0 15px ${({ theme }) => theme.colors.primary}50;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-image: url(${avatarImage});
  background-size: cover;
  background-position: center;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1));
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  padding: 15px;
  background: ${({ theme }) => `${theme.colors.primary}10`};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    padding: 20px;
  }
`;

const LevelText = styled.div`
  color: #9933ff;
  font-size: 16px;
  margin: 5px 0;
`;

interface ProgressBarProps {
  $progress: string;
}

const StatProgressBar = styled.div<ProgressBarProps>`
  width: 100%;
  height: 4px;
  background: ${({ theme }) => `${theme.colors.primary}30`};
  border-radius: 2px;
  margin-top: 5px;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${props => props.$progress};
    background: ${({ theme }) => theme.colors.primary};
    transition: width 1s ease;
  }
`;

const PlayerLevel = styled(LevelText)`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.surface};
  padding: 4px 12px;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  font-size: 14px;
  font-weight: bold;
`;

const PlayerStats = styled(StatsContainer)`
  margin-top: 20px;
  background: ${({ theme }) => `${theme.colors.primary}15`};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};
  
  ${({ theme }) => theme.name === 'cyberpunk' && `
    border: 1px solid ${theme.colors.primary};
    box-shadow: inset 0 0 10px ${theme.colors.primary}30;
  `}
`;

const Username = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin: 10px 0;
  font-size: 20px;
`;

const Level = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 16px;
  margin: 5px 0;
`;

const Coins = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  margin: 10px 0;
  font-weight: bold;
`;

const TournamentCard = styled(Card)`
  position: relative;
`;

const LiveBadge = styled.span`
  background: #00ff9d;
  color: #000;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
`;

const JoinButton = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: perspective(1px) translateZ(0);
  box-shadow: ${({ theme }) => theme.shadows.default};

  &:hover {
    transform: translateY(-2px) translateZ(5px);
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }

  &:active {
    transform: translateY(0) translateZ(2px);
  }

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
  }
`;

const StatsCard = styled(Card)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  text-align: center;

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: 769px) {
    gap: 8px;

    svg {
      font-size: 24px;
    }
  }
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
  text-shadow: 0 0 10px ${({ theme }) => `${theme.colors.primary}50`};

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const GradientButton = styled.button`
  width: 100%;
  padding: 8px 12px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  margin-top: auto;

  svg {
    font-size: 16px;
  }

  @media (min-width: 769px) {
    padding: 10px 16px;
    font-size: 14px;

    svg {
      font-size: 18px;
    }
  }

  ${({ theme }) => theme.name === 'hybrid' && `
    background: ${theme.colors.gradient};
    font-family: ${theme.fonts.primary};
    font-weight: bold;
    letter-spacing: 1px;
    border: 1px solid ${theme.colors.primary}40;
    
    &:hover {
      box-shadow: 0 0 20px ${theme.colors.primary}60;
      transform: translateY(-2px);
      
      svg {
        transform: scale(1.2);
      }
    }
    
    svg {
      transition: transform 0.3s ease;
    }
  `}
`;

const CoinsText = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: bold;
  font-size: 18px;
  
  ${({ theme }) => theme.name === 'hybrid' && `
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    
    svg {
      filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
    }
  `}
`;

const PriceTag = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  font-size: 20px;
  
  ${({ theme }) => theme.name === 'hybrid' && `
    color: #ffd700;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
    font-family: ${theme.fonts.primary};
    letter-spacing: 1px;
    
    svg {
      color: #ffd700;
      filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
    }
  `}
`;

const ProductCard = styled(Card)`
  padding: 0;
  display: flex;
  flex-direction: column;
  height: auto;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => `${theme.colors.primary}15`};
  transition: all 0.3s ease;

  ${({ theme }) => {
    switch (theme.name) {
      case 'cyberpunk':
        return `
          border: 2px solid ${theme.colors.primary};
          box-shadow: 0 0 20px ${theme.colors.primary}40;
          &:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 30px ${theme.colors.primary}60;
          }
        `;
      case 'gaming':
        return `
          background: linear-gradient(145deg, ${theme.colors.surface}, ${theme.colors.surface}ee);
          border: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          &:hover {
            transform: scale(1.02);
          }
        `;
      case 'esports':
        return `
          border: 3px solid transparent;
          background: linear-gradient(${theme.colors.surface}, ${theme.colors.surface}) padding-box,
                    ${theme.colors.gradient} border-box;
          &:hover {
            border-color: ${theme.colors.primary};
          }
        `;
      default:
        return '';
    }
  }}

  img {
    width: 100%;
    height: 140px;
    object-fit: contain;
    padding: 10px;
    background: ${({ theme }) => theme.colors.background};
    border-top-left-radius: ${({ theme }) => theme.borderRadius};
    border-top-right-radius: ${({ theme }) => theme.borderRadius};
  }

  @media (min-width: 769px) {
    min-height: 360px;

    img {
      height: 160px;
      padding: 15px;
    }
  }
`;

const ProductContent = styled.div`
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3 {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    ${({ theme }) => theme.name === 'cyberpunk' && `
      text-shadow: 0 0 5px ${theme.colors.primary};
    `}
  }

  @media (min-width: 769px) {
    padding: 15px;
    
    h3 {
      font-size: 18px;
    }
  }
`;

const ProductStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 10px;
  background: ${({ theme }) => `${theme.colors.primary}15`};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 5px 0;

  ${({ theme }) => {
    switch (theme.name) {
      case 'cyberpunk':
        return `
          background: rgba(0,0,0,0.3);
          border: 1px solid ${theme.colors.primary}40;
        `;
      case 'gaming':
        return `
          background: linear-gradient(145deg, ${theme.colors.primary}20, ${theme.colors.primary}05);
        `;
      case 'esports':
        return `
          background: ${theme.colors.surface};
          border: 2px solid ${theme.colors.primary}30;
        `;
      default:
        return '';
    }
  }}

  @media (min-width: 769px) {
    padding: 12px;
    gap: 10px;
  }
`;

const ProductStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  
  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary};
  }

  .value {
    font-weight: bold;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    ${({ theme }) => theme.name === 'cyberpunk' && `
      text-shadow: 0 0 5px ${theme.colors.primary};
    `}
  }

  .label {
    font-size: 11px;
    color: ${({ theme }) => theme.colors.muted};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  @media (min-width: 769px) {
    svg {
      font-size: 18px;
    }

    .value {
      font-size: 16px;
    }

    .label {
      font-size: 12px;
    }
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
`;

interface StatusBadgeProps {
  $type: 'live' | 'inStock' | 'active' | 'hot' | 'new' | 'sale' | 'upcoming';
}

const StatusBadge = styled.span<StatusBadgeProps>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  z-index: 2;
  
  ${({ $type, theme }) => {
    if (theme.name === 'hybrid') {
      switch ($type) {
        case 'active':
          return `
            background: linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.accent});
            color: #000;
            font-family: ${theme.fonts.primary};
            font-weight: bold;
            letter-spacing: 1px;
            border: 1px solid ${theme.colors.primary};
            box-shadow: 0 0 15px ${theme.colors.primary}50;
            
            svg {
              animation: pulse 2s infinite;
              filter: drop-shadow(0 0 3px ${theme.colors.primary});
            }
          `;
        case 'live':
          return `
            background: #00ff9d;
            color: #000;
            box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
            top: 10px;
            right: 10px;
          `;
        case 'inStock':
          return `
            background: ${theme.colors.primary};
            color: ${theme.colors.text};
            box-shadow: 0 0 10px ${theme.colors.primary}50;
            top: 10px;
            right: 10px;
          `;
        case 'hot':
          return `
            background: #ff3e3e;
            color: #fff;
            box-shadow: 0 0 10px rgba(255, 62, 62, 0.5);
            top: 45px;
            right: 10px;
          `;
        case 'sale':
          return `
            background: #ff9100;
            color: #fff;
            box-shadow: 0 0 10px rgba(255, 145, 0, 0.5);
            top: 45px;
            right: 10px;
          `;
        default:
          return '';
      }
    } else {
      switch ($type) {
        case 'active':
          switch (theme.name) {
            case 'cyberpunk':
              return `
                background: linear-gradient(90deg, #00ff9d, #00ffea);
                color: #000;
                box-shadow: 0 0 15px rgba(0, 255, 157, 0.6);
                border: 1px solid #00ff9d;
                top: 10px;
                right: 10px;
                
                svg {
                  animation: pulse 2s infinite;
                }
              `;
            case 'gaming':
              return `
                background: linear-gradient(90deg, #ff3e3e, #ff9100);
                color: #fff;
                padding: 6px 12px;
                top: 10px;
                right: 10px;
                border-radius: 20px;
                font-weight: bold;
                overflow: hidden;
                
                &::before,
                &::after {
                  content: '';
                  position: absolute;
                  width: 8px;
                  height: 8px;
                  background: rgba(255, 255, 255, 0.8);
                  border-radius: 50%;
                  animation: float 3s infinite;
                }

                &::before {
                  left: 8px;
                  animation-delay: 0s;
                }

                &::after {
                  left: 20px;
                  animation-delay: 1.5s;
                }

                span {
                  position: relative;
                  z-index: 1;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
                }

                svg {
                  position: relative;
                  z-index: 1;
                  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
                }
              `;
            case 'esports':
              return `
                background: #9933ff;
                color: #fff;
                box-shadow: 0 0 12px rgba(153, 51, 255, 0.5);
                border: 2px solid #bf7fff;
                top: 10px;
                right: 10px;
                
                svg {
                  color: #00ff9d;
                }
              `;
            case 'luxury':
              return `
                background: #ffd700;
                color: #000;
                box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
                border: 1px solid #ffed4a;
                top: 10px;
                right: 10px;
                
                svg {
                  color: #ff3e3e;
                }
              `;
            case 'futuristic':
              return `
                background: rgba(0, 255, 255, 0.2);
                color: #00ffff;
                box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
                border: 1px solid #00ffff;
                backdrop-filter: blur(5px);
                top: 10px;
                right: 10px;
                
                svg {
                  animation: rotate 2s linear infinite;
                }
              `;
            default:
              return `
                background: #00ff9d;
                color: #000;
                box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
                top: 10px;
                right: 10px;
              `;
          }
        case 'live':
          return `
            background: #00ff9d;
            color: #000;
            box-shadow: 0 0 10px rgba(0, 255, 157, 0.5);
            top: 10px;
            right: 10px;
          `;
        case 'inStock':
          return `
            background: ${theme.colors.primary};
            color: ${theme.colors.text};
            box-shadow: 0 0 10px ${theme.colors.primary}50;
            top: 10px;
            right: 10px;
          `;
        case 'hot':
          return `
            background: #ff3e3e;
            color: #fff;
            box-shadow: 0 0 10px rgba(255, 62, 62, 0.5);
            top: 45px;
            right: 10px;
          `;
        case 'sale':
          return `
            background: #ff9100;
            color: #fff;
            box-shadow: 0 0 10px rgba(255, 145, 0, 0.5);
            top: 45px;
            right: 10px;
          `;
        default:
          return '';
      }
    }
  }}

  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.5; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes float {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-5px);
      opacity: 0;
    }
  }
`;

const themeNames: Record<ThemeNames, string> = {
  cyberpunk: 'Cyberpunk',
  gaming: 'Gaming Pro',
  esports: 'Esports',
  luxury: 'Luxury',
  futuristic: 'Future Tech',
  ultraGaming: 'Ultra Gaming',
  ultraGamingPro: 'Ultra Gaming Pro',
  cyberGamingPro: 'Cyber Gaming Pro',
  proGaming: 'Pro Gaming',
  minimalist: 'Minimalist',
  hybrid: 'Hybrid'
};

const themes: Record<ThemeNames, ThemeType> = {
  cyberpunk: cyberpunkTheme,
  gaming: gamingTheme,
  esports: esportsTheme,
  luxury: luxuryTheme,
  futuristic: futuristicTheme,
  ultraGaming: ultraGamingTheme,
  ultraGamingPro: ultraGamingProTheme,
  cyberGamingPro: cyberGamingProTheme,
  proGaming: proGamingTheme,
  minimalist: minimalistTheme,
  hybrid: {
    name: 'hybrid',
    colors: {
      primary: '#00ff9d',
      secondary: '#ff3e3e',
      accent: '#9933ff',
      background: '#0a0a0a',
      surface: '#1a1a1a',
      text: '#ffffff',
      muted: '#888888',
      gradient: 'linear-gradient(135deg, #00ff9d 0%, #9933ff 100%)',
    },
    fonts: {
      primary: "'Rajdhani', sans-serif",
      secondary: "'Orbitron', sans-serif",
    },
    borderRadius: '4px',
    transitions: {
      default: '0.3s ease',
    },
    shadows: {
      card: '0 0 20px rgba(0, 255, 157, 0.2)',
      button: '0 0 15px rgba(153, 51, 255, 0.3)',
      neon: '0 0 25px rgba(0, 255, 157, 0.4)'
    },
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState<ThemeNames>('cyberpunk');

  // Сообщаем Telegram, что приложение готово
  useEffect(() => {
    tg.ready();
    tg.expand(); // Раскрываем на весь экран
  }, []);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyle theme={themes[currentTheme]} />
      <AppContainer>
        <Header />
        <Navigation />
        <ContentWrapper>
          <SectionTitle>Выберите тему</SectionTitle>
          <ThemeSelector>
            {Object.entries(themeNames).map(([key, name]) => (
              <ThemeButton
                key={key}
                $isActive={currentTheme === key}
                onClick={() => setCurrentTheme(key as ThemeNames)}
              >
                {name}
              </ThemeButton>
            ))}
          </ThemeSelector>
          <SectionTitle>Обзор</SectionTitle>
          <MainContent>
            <PlayerCard>
              <StatusBadge $type="active">
                <Icons.FaCircle size={8} />
                <span>Online</span>
              </StatusBadge>
              <AvatarWrapper>
                <Avatar>
                  <img 
                    src={avatarImage} 
                    alt="Player Avatar" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                </Avatar>
                <PlayerLevel>Уровень 42</PlayerLevel>
              </AvatarWrapper>
              <Username>CyberPlayer</Username>
              <CoinsText>
                <Icons.FaCoins style={{ marginRight: '8px', color: '#FFD700' }} />
                1500 coins
              </CoinsText>
              <PlayerStats>
                <StatItem>
                  <Icons.FaClock size={20} />
                  <StatValue>156</StatValue>
                  <StatLabel>Часов</StatLabel>
                  <StatProgressBar $progress="75%" />
                </StatItem>
                <StatItem>
                  <Icons.FaTrophy size={20} />
                  <StatValue>23</StatValue>
                  <StatLabel>Турниров</StatLabel>
                  <StatProgressBar $progress="45%" />
                </StatItem>
                <StatItem>
                  <Icons.FaMedal size={20} />
                  <StatValue>12</StatValue>
                  <StatLabel>Побед</StatLabel>
                  <StatProgressBar $progress="60%" />
                </StatItem>
              </PlayerStats>
              <GradientButton style={{ marginTop: '15px' }}>
                <Icons.FaUserEdit size={16} />
                <span>Редактировать профиль</span>
              </GradientButton>
            </PlayerCard>
            <Card style={{ position: 'relative' }}>
              <StatusBadge $type="live">
                <Icons.FaCircle size={8} />
                LIVE
              </StatusBadge>
              <StatusBadge $type="hot">
                <Icons.FaFire size={10} />
                HOT
              </StatusBadge>
              <h3>CS:GO Weekly Cup</h3>
              <CoinsText>5000 coins</CoinsText>
              <p>Начало: 2024-03-20 18:00</p>
              <p>Участники: 14/16</p>
              <GradientButton>
                <Icons.FaGamepad size={16} />
                <span>Присоединиться</span>
              </GradientButton>
            </Card>
            <ProductCard style={{ position: 'relative' }}>
              <StatusBadge $type="inStock">
                <Icons.FaCheck size={10} />
                В наличии
              </StatusBadge>
              <StatusBadge $type="sale">
                <Icons.FaPercent size={10} />
                -20%
              </StatusBadge>
              <img src={keyboardImage} alt="Gaming Keyboard" />
              <ProductContent>
                <h3>Pro Gaming Keyboard RGB</h3>
                <ProductStats>
                  <ProductStat>
                    <Icons.FaStar size={20} color="#FFD700" />
                    <div className="value">4.8</div>
                    <div className="label">Рейтинг</div>
                  </ProductStat>
                  <ProductStat>
                    <Icons.FaComments size={20} />
                    <div className="value">142</div>
                    <div className="label">Отзывы</div>
                  </ProductStat>
                  <ProductStat>
                    <Icons.FaBox size={20} />
                    <div className="value">15</div>
                    <div className="label">В наличии</div>
                  </ProductStat>
                </ProductStats>
                <GradientButton>
                  <Icons.FaShoppingCart size={18} />
                  <span>Купить сейчас</span>
                </GradientButton>
              </ProductContent>
            </ProductCard>
            <Card>
              <h3>Статистика игрока</h3>
              <StatsContainer>
                <StatItem>
                  <Icons.FaTrophy size={22} />
                  <StatValue>156</StatValue>
                  <StatLabel>Матчей</StatLabel>
                  <StatProgressBar $progress="80%" />
                </StatItem>
                <StatItem>
                  <Icons.FaChartLine size={22} />
                  <StatValue>78%</StatValue>
                  <StatLabel>Винрейт</StatLabel>
                  <StatProgressBar $progress="78%" />
                </StatItem>
                <StatItem>
                  <Icons.FaCrosshairs size={22} />
                  <StatValue>68%</StatValue>
                  <StatLabel>Точность</StatLabel>
                  <StatProgressBar $progress="68%" />
                </StatItem>
                <StatItem>
                  <Icons.FaSkull size={22} />
                  <StatValue>2.4</StatValue>
                  <StatLabel>K/D</StatLabel>
                  <StatProgressBar $progress="65%" />
                </StatItem>
              </StatsContainer>
            </Card>
          </MainContent>
        </ContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
