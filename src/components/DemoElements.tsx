import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
`;

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 24px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const GradientButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const Badge = styled(motion.span)`
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.background};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
`;

const GlassPanel = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 16px;
  font-size: 24px;
`;

const DemoElements = () => {
  return (
    <Container>
      <Card
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Title>Premium Card</Title>
        <Badge>VIP</Badge>
        <p>Эксклюзивный контент</p>
        <GradientButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Активировать
        </GradientButton>
      </Card>

      <GlassPanel
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title>Стеклянная панель</Title>
        <p>Современный эффект размытия</p>
      </GlassPanel>
    </Container>
  );
};

export default DemoElements; 