import styled from 'styled-components';

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 25px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => `${theme.colors.primary}30`};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.neon};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`; 