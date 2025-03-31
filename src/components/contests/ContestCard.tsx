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

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: ${({ theme }) => theme.colors.gradient};
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Prize = styled.div`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TimeLeft = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.9em;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ParticipateButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

interface ContestCardProps {
  title: string;
  prize: string;
  timeLeft: string;
  onParticipate: () => void;
}

export const ContestCard: React.FC<ContestCardProps> = ({
  title,
  prize,
  timeLeft,
  onParticipate
}) => {
  return (
    <Card
      whileHover={{ translateY: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <GradientOverlay />
      <Title>{title}</Title>
      <Prize>Приз: {prize}</Prize>
      <TimeLeft>Осталось: {timeLeft}</TimeLeft>
      <ParticipateButton
        whileTap={{ scale: 0.95 }}
        onClick={onParticipate}
      >
        Участвовать
      </ParticipateButton>
    </Card>
  );
}; 