import styled from 'styled-components';
import { motion } from 'framer-motion';
import StatusBadge from '../common/StatusBadge';
import { useState } from 'react';
import { images } from '../../assets/images';
import { Icon } from '../common/Icon';

const Card = styled(motion.div)`
  position: relative;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.default};
  display: flex;
  flex-direction: column;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.hover};
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  
  @media (max-width: 768px) {
    height: 160px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 160px;
  }
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.primary};
  font-size: 48px;
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Price = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const BuyButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.primary};
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Status = styled.div<{ type: 'success' | 'error' | 'warning' | 'info' }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: ${({ theme, type }) => theme.colors[type]};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  font-weight: 500;
  z-index: 1;
`;

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  onBuy: () => void;
  status?: 'success' | 'error' | 'warning' | 'info';
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  price, 
  image, 
  onBuy,
  status = 'success'
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Card
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Status type={status}>В наличии</Status>
      <ImageContainer>
        {!imageError ? (
          <Image 
            src={image} 
            alt={title}
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <FallbackImage>
            <Icon name="product" size={64} />
          </FallbackImage>
        )}
      </ImageContainer>
      <Title>{title}</Title>
      <Price>{price} coins</Price>
      <BuyButton
        whileTap={{ scale: 0.95 }}
        onClick={onBuy}
      >
        Купить
      </BuyButton>
    </Card>
  );
}; 