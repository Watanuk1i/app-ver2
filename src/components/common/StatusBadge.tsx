import styled from 'styled-components';

interface StatusBadgeProps {
  type: 'success' | 'error' | 'warning' | 'info';
}

const StatusBadge = styled.span<StatusBadgeProps>`
  background: ${({ theme, type }) => theme.colors[type]};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.875rem;
  font-weight: 500;
`;

export default StatusBadge; 