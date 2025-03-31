import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.default};
  position: relative;
  overflow: hidden;
`;

const StatusBadge = styled.div<{ status: 'upcoming' | 'live' | 'ended' }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 0.875em;
  font-weight: bold;
  
  ${({ status, theme }) => {
    switch (status) {
      case 'live':
        return `
          background: ${theme.colors.success};
          color: ${theme.colors.text};
        `;
      case 'upcoming':
        return `
          background: ${theme.colors.warning};
          color: ${theme.colors.text};
        `;
      case 'ended':
        return `
          background: ${theme.colors.muted};
          color: ${theme.colors.text};
        `;
    }
  }}
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PrizePool = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const InfoItem = styled.div`
  color: ${({ theme }) => theme.colors.text};
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.875em;
  display: block;
`;

const JoinButton = styled(motion.button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.gradient};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  font-weight: bold;
  cursor: pointer;
  
  &:disabled {
    background: ${({ theme }) => theme.colors.muted};
    cursor: not-allowed;
  }
`;

interface TournamentCardProps {
  title: string;
  prizePool: number;
  status: 'upcoming' | 'live' | 'ended';
  startDate: string;
  players: number;
  maxPlayers: number;
  onJoin: () => void;
}

export const TournamentCard: React.FC<TournamentCardProps> = ({
  title,
  prizePool,
  status,
  startDate,
  players,
  maxPlayers,
  onJoin
}) => {
  return (
    <Card
      whileHover={{ translateY: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <StatusBadge status={status}>
        {status === 'live' ? 'LIVE' : status === 'upcoming' ? 'СКОРО' : 'ЗАВЕРШЕН'}
      </StatusBadge>
      <Title>{title}</Title>
      <PrizePool>{prizePool} coins</PrizePool>
      <Info>
        <InfoItem>
          <Label>Начало</Label>
          {startDate}
        </InfoItem>
        <InfoItem>
          <Label>Участники</Label>
          {players}/{maxPlayers}
        </InfoItem>
      </Info>
      <JoinButton
        whileTap={{ scale: 0.95 }}
        onClick={onJoin}
        disabled={status === 'ended'}
      >
        {status === 'live' ? 'Присоединиться' : status === 'upcoming' ? 'Зарегистрироваться' : 'Завершен'}
      </JoinButton>
    </Card>
  );
}; 