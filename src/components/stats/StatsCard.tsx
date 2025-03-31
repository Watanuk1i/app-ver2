import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.default};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2em;
  font-weight: bold;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9em;
  opacity: 0.8;
`;

interface StatsCardProps {
  stats: {
    label: string;
    value: number | string;
  }[];
}

export const StatsCard: React.FC<StatsCardProps> = ({ stats }) => {
  return (
    <Container
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {stats.map((stat, index) => (
        <StatItem key={index}>
          <StatValue>{stat.value}</StatValue>
          <StatLabel>{stat.label}</StatLabel>
        </StatItem>
      ))}
    </Container>
  );
}; 