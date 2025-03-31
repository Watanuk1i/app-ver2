import styled from 'styled-components';
import { Card } from '../common/Card';

const ProfileContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  margin-bottom: 15px;
  box-shadow: ${({ theme }) => theme.shadows.neon};
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

interface ProfileCardProps {
  username: string;
  level: number;
  coins: number;
}

const ProfileCard = ({ username, level, coins }: ProfileCardProps) => {
  return (
    <ProfileContainer>
      <Avatar />
      <Username>{username}</Username>
      <Level>Уровень {level}</Level>
      <Coins>{coins} coins</Coins>
    </ProfileContainer>
  );
};

export default ProfileCard; 