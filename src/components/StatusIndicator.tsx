import styled from 'styled-components';
import { ThemeType } from '../types';

interface StatusIndicatorProps {
  $status: 'success' | 'error' | 'warning' | 'info';
  theme: ThemeType;
}

const StatusIndicator = styled.div<{ $status: StatusIndicatorProps['$status'] }>`
  background-color: ${({ theme, $status }) => {
    switch ($status) {
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.info;
    }
  }};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: ${({ theme }) => theme.shadows.subtle};
  transition: ${({ theme }) => theme.transitions.default};
  margin: 4px;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.neon};
  }
`;

export default StatusIndicator;

// Использование:
<StatusIndicator $status="success" /> 