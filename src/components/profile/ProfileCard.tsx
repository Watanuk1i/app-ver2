import styled from 'styled-components';
import { motion } from 'framer-motion';
import { images } from '../../assets/images';
import { useState } from 'react';
import { Icon } from '../common/Icon';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.default};
`;

const AvatarContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
`;

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FallbackAvatar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
`;

const Username = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const Level = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5em;
  font-weight: bold;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.875em;
`;

const CoinsBalance = styled.div`
  background: ${({ theme }) => theme.colors.gradient};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

interface ProfileCardProps {
  username: string;
  level: number;
  avatar: string;
  coins: number;
  stats: {
    hours: number;
    tournaments: number;
    wins: number;
  };
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  username,
  level,
  avatar,
  coins,
  stats
}) => {
  const [avatarError, setAvatarError] = useState(false);

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AvatarContainer>
        {!avatarError ? (
          <Avatar 
            src={avatar} 
            alt={username}
            onError={() => setAvatarError(true)}
            loading="lazy"
          />
        ) : (
          <FallbackAvatar>
            <Icon name="user" size={48} />
          </FallbackAvatar>
        )}
      </AvatarContainer>
      <Username>{username}</Username>
      <Level>Уровень {level}</Level>
      <CoinsBalance>{coins} coins</CoinsBalance>
      <Stats>
        <StatItem>
          <StatValue>{stats.hours}</StatValue>
          <StatLabel>Часов</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.tournaments}</StatValue>
          <StatLabel>Турниров</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{stats.wins}</StatValue>
          <StatLabel>Побед</StatLabel>
        </StatItem>
      </Stats>
    </Card>
  );
}; 