import styled from 'styled-components';
import * as Icons from 'react-icons/fa';

const Nav = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  padding: 10px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  @media (min-width: 769px) {
    padding: 15px 0;
    margin-bottom: 30px;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  gap: 5px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 769px) {
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    gap: 40px;
    padding: 0 20px;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    
    &::after {
      width: 80%;
    }

    svg {
      transform: scale(1.2);
    }
  }

  svg {
    font-size: 20px;
    transition: transform 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 10px 14px;
    font-size: 14px;
    
    svg {
      font-size: 18px;
    }
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLink href="#">
          <Icons.FaHome size={20} />
          <span>Главная</span>
        </NavLink>
        <NavLink href="#">
          <Icons.FaTrophy size={20} />
          <span>Турниры</span>
        </NavLink>
        <NavLink href="#">
          <Icons.FaStore size={20} />
          <span>Магазин</span>
        </NavLink>
        <NavLink href="#">
          <Icons.FaUser size={20} />
          <span>Профиль</span>
        </NavLink>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 