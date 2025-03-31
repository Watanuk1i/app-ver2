import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.surface};
  padding: 25px 0;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const Logo = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  font-size: 32px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px ${({ theme }) => `${theme.colors.primary}50`};

  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Computer Club</Logo>
    </HeaderContainer>
  );
};

export default Header; 